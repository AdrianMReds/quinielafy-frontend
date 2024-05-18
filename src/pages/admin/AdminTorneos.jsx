import React, { useState, useEffect } from "react";
import adminService from "../../api/adminService";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminTorneoCard from "../../components/admin/AdminTorneoCard";

const AdminTorneos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  console.log(torneos);

  return (
    <div className="w-full md:w-[80%] h-[90vh] flex flex-wrap justify-start content-start p-2 relative overflow-auto">
      {torneos.map((torneo) => {
        return <AdminTorneoCard torneo={torneo} />;
      })}
    </div>
  );
};

export default AdminTorneos;
