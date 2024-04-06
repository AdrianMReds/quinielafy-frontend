import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getQuinielas, reset } from "../features/quinielas/quinielaSlice";
import QuinielaCard from "../components/QuinielaCard";
import { logout } from "../features/auth/authSlice";
import { PlusOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import CreateQuinielaModal from "../components/CreateQuinielaModal";
import tournamentService from "../api/tournamentService";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [torneos, setTorneos] = useState();

  const { user } = useSelector((state) => state.auth);
  const { quinielas, isLoading, isError, message } = useSelector(
    (state) => state.quinielas
  );

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
        const tournaments = await tournamentService.getAllTournaments();
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

  // console.log(quinielas);
  console.log(torneos);

  return (
    <div className="w-[80%] p-2 relative">
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
      />
    </div>
  );
};

export default Home;
