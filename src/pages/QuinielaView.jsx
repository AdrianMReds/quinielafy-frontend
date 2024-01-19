import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getQuinielaData, reset } from "../features/quinielas/quinielaSlice";
import "../styles/quinielaView.css";

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

  console.log(id);
  console.log(quinielaActiva);

  return (
    <div>
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
    </div>
  );
};

export default QuinielaView;
