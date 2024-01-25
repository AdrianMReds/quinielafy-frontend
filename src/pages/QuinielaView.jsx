import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getQuinielaData, reset } from "../features/quinielas/quinielaSlice";
import "../styles/quinielaView.css";
import { FaQuestionCircle } from "react-icons/fa";
import Spinner from "../components/Spinner";

const QuinielaView = ({ quiniela }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [selectedTab, setSelectedTab] = useState("marcadores");

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

  console.log(user._id);
  console.log(`Admin quiniela -> ${quinielaActiva.admin}`);

  return (
    <div>
      <div className="title">
        <h1>{quinielaActiva.name}</h1>
        {user._id === quinielaActiva.admin ?? <FaQuestionCircle />}
      </div>

      {/* Tabs */}
      <div className="tabs">
        <div
          className="tab"
          style={{
            backgroundColor:
              selectedTab === "marcadores" ? "#b4b2b2" : undefined,
          }}
          onClick={() => {
            setTab("marcadores");
          }}
        >
          Marcadores
        </div>
        <div
          className="tab"
          style={{
            backgroundColor: selectedTab === "tabla" ? "#b4b2b2" : undefined,
          }}
          onClick={() => {
            setTab("tabla");
          }}
        >
          Tabla
        </div>
        <div
          className="tab"
          style={{
            backgroundColor: selectedTab === "ajustes" ? "#b4b2b2" : undefined,
          }}
          onClick={() => {
            setTab("ajustes");
          }}
        >
          Ajustes
        </div>
      </div>

      {/*  */}
      <div>{JSON.stringify(quinielaActiva)}</div>
    </div>
  );
};

export default QuinielaView;
