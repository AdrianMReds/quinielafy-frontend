import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  console.log(user);
  return (
    <>
      <section className="heading">
        <h1>Bienvenido {"Unknown"}</h1>
        <p>Quinielafy dashboard</p>
      </section>
      <section className="content">
        <h3>No tienes quinielas activas</h3>
      </section>
    </>
  );
};

export default Home;
