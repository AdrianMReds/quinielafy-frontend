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

  console.log(user);

  return (
    <>
      <section className="heading">
        <p>Mis quinielas</p>
        <button className="btn">Crear quiniela</button>
      </section>
      <section className="content" style={{ width: "100%" }}>
        <div style={{ display: "flex", padding: 15, backgroundColor: "pink" }}>
          {quinielas.length > 0 ? (
            quinielas.map((quiniela, idx) => {
              return (
                <QuinielaCard
                  key={quiniela._id}
                  quiniela={quiniela}
                  admin={user._id === quiniela.admin}
                />
              );
            })
          ) : (
            <h3>No tienes quinielas</h3>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
