import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getQuinielaData, reset } from "../features/quinielas/quinielaSlice";
import { FaQuestionCircle } from "react-icons/fa";
import Spinner from "../components/Spinner";

const QuinielaView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [selectedTab, setSelectedTab] = useState("predicciones");

  const setTab = (newtab) => {
    if (selectedTab !== newtab) {
      setSelectedTab(newtab);
    }
  };

  const { user } = useSelector((state) => state.auth);
  const { quinielas, quinielaActiva, isLoading, isError, message } =
    useSelector((state) => state.quinielas);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    } else {
      dispatch(getQuinielaData(id));
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <div className="w-full md:w-[80%] p-5 overflow-y-auto">
      <h1 className="w-full text-2xl text-center text-darkMainColor">
        {quinielaActiva.name}
      </h1>
      <div id="tabs" className="flex justify-around my-4">
        <div
          className={`w-[30%] p-2 text-xs md:text-base md:p-4 content-center border-2 border-darkMainColor text-center rounded-md hover:text-white hover:bg-darkMainColor cursor-pointer ${
            selectedTab === "predicciones"
              ? "bg-darkMainColor text-white"
              : "bg-white text-darkMainColor"
          }`}
          onClick={() => {
            setTab("predicciones");
          }}
        >
          Tus predicciones
        </div>

        <div
          className={`w-[30%] p-2 text-xs md:text-base md:p-4 content-center border-2 border-darkMainColor text-center rounded-md hover:text-white hover:bg-darkMainColor cursor-pointer ${
            selectedTab === "marcadores"
              ? "bg-darkMainColor text-white"
              : "bg-white text-darkMainColor"
          }`}
          onClick={() => {
            setTab("marcadores");
          }}
        >
          Marcadores
        </div>

        <div
          className={`w-[30%] p-2 text-xs md:text-base md:p-4 content-center border-2 border-darkMainColor text-center rounded-md hover:text-white hover:bg-darkMainColor cursor-pointer ${
            selectedTab === "tabla"
              ? "bg-darkMainColor text-white"
              : "bg-white text-darkMainColor"
          }`}
          onClick={() => {
            setTab("tabla");
          }}
        >
          Tabla
        </div>
      </div>
    </div>
  );
};

export default QuinielaView;
