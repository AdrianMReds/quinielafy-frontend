import React, { useState, useEffect } from "react";
import adminService from "../../api/adminService";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminTorneoCard from "../../components/admin/AdminTorneoCard";
import { PlusOutlined } from "@ant-design/icons";
import CreateTorneoModal from "../../components/admin/CreateTorneoModal";

const AdminTorneos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [torneos, setTorneos] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const getAllTorneos = async () => {
    try {
      const response = await adminService.getAllTorneos(user.token);
      if (response.status === 200) {
        setTorneos(response.data);
      }
    } catch (error) {
      console.error(`Error leyendo torneos: ${error}`);
    }
  };

  const handleCreateTorneo = async (quinielaData) => {
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
    if (!user || !user.admin) {
      navigate("/login");
    } else {
      try {
        getAllTorneos();
      } catch (error) {
        console.log(`ERROR -> ${error}`);
      }
    }
  }, [user, navigate, dispatch]);

  return (
    <div className="w-full md:w-[80%] h-[90vh] flex flex-wrap justify-start content-start p-2 pt-16 relative overflow-auto">
      {torneos.map((torneo) => {
        return <AdminTorneoCard torneo={torneo} />;
      })}
      <button
        className="absolute top-5 right-5 bg-darkMainColor text-white p-3 rounded-md hover:scale-105 duration-200"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Crear torneo <PlusOutlined />
      </button>
      <CreateTorneoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        equipos={[]}
        handleCreateTorneo={handleCreateTorneo}
      />
    </div>
  );
};

export default AdminTorneos;
