import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getQuinielas, reset } from "../features/quinielas/quinielaSlice";
import QuinielaCard from "../components/QuinielaCard";
import { logout } from "../features/auth/authSlice";
import { PlusOutlined } from "@ant-design/icons";
import CreateQuinielaModal from "../components/CreateQuinielaModal";
import tournamentService from "../api/tournamentService";
import quinielaService from "../api/quinielaService";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [torneos, setTorneos] = useState();

  const { user } = useSelector((state) => state.auth);
  const { quinielas, isLoading, isError, message } = useSelector(
    (state) => state.quinielas
  );

  const handleCreateQuiniela = async (quinielaData) => {
    try {
      const response = await quinielaService.createQuiniela(
        quinielaData,
        user.token
      );
      if (response.status === 200) {
        const newQuiniela = response.data;
        navigate(`/quiniela/${newQuiniela._id}`);
      }
    } catch (error) {
      console.error(`Error creando quiniela: ${error}`);
    }
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
      dispatch(logout());
      navigate("/login");
    }

    if (!user) {
      navigate("/login");
    } else {
      try {
        dispatch(getQuinielas());
      } catch (error) {
        console.log(`ERROR -> ${error}`);
      }
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const tournaments = user
          ? await tournamentService.getAllTournaments(user.token)
          : null;
        setTorneos(tournaments?.data);
      } catch (error) {
        console.error(`Error al obtener torneos: ${error}`);
      }
    };

    fetchTournaments();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-[80%] h-[90vh] flex flex-wrap justify-start content-start p-2 relative overflow-auto">
      {quinielas.map((quiniela) => {
        return (
          <QuinielaCard
            key={quiniela._id}
            quiniela={quiniela}
            admin={user._id === quiniela.admin}
          />
        );
      })}
      <button
        className="absolute top-5 right-5 bg-darkMainColor text-white p-3 rounded-md hover:scale-105 duration-200"
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        Crear quiniela <PlusOutlined />
      </button>
      <CreateQuinielaModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        torneos={torneos}
        handleCreateQuiniela={handleCreateQuiniela}
      />
    </div>
  );
};

export default Home;
