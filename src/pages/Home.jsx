import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getQuinielas, reset } from "../features/quinielas/quinielaSlice";
import QuinielaCard from "../components/QuinielaCard";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { quinielas, isLoading, isError, message } = useSelector(
    (state) => state.quinielas
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    } else {
      dispatch(getQuinielas());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <p>Quinielafy dashboard</p>
        <button className="btn">Crear quiniela</button>
      </section>
      <section className="content">
        {quinielas.length > 0 ? (
          quinielas.map((quiniela, idx) => {
            return <QuinielaCard quiniela={quiniela} />;
          })
        ) : (
          <h3>No tienes quinielas</h3>
        )}
      </section>
    </>
  );
};

export default Home;
