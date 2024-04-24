import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import adminService from "../../api/adminService";
import AdminQuinielaCard from "../../components/admin/AdminQuinielaCard";

const AdminHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [quinielas, setQuinielas] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const currentPath = location.pathname;

  const getAllQuinielas = async () => {
    try {
      const response = await adminService.getAllQuinielas(user.token);
      if (response.status === 200) {
        setQuinielas(response.data);
      }
    } catch (error) {
      console.error(`Error leyendo quinielas: ${error}`);
    }
  };

  useEffect(() => {
    if (!user || !user.admin) {
      navigate("/login");
    } else {
      try {
        getAllQuinielas();
      } catch (error) {
        console.log(`ERROR -> ${error}`);
      }
    }
  }, [user, navigate, dispatch]);

  return (
    <div className="w-full md:w-[80%] h-[90vh] flex flex-wrap justify-start content-start p-2 relative overflow-auto">
      {quinielas.map((quiniela) => {
        return <AdminQuinielaCard quiniela={quiniela} />;
      })}
    </div>
  );
};

export default AdminHome;
