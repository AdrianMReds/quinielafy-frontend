import React, { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    // <div>
    //   <section className="heading">
    //     <h1>
    //       <FaSignInAlt /> Login
    //     </h1>
    //     <p>Inicia sesión</p>
    //   </section>

    //   <section className="form">
    //     <form onSubmit={onSubmit}>
    //       <div className="form-group">
    //         <h4>Correo electrónico</h4>
    // <input
    //   type="email"
    //   className="form-control"
    //   id="email"
    //   name="email"
    //   value={email}
    //   placeholder="Enter your email"
    //   onChange={onChange}
    // />
    //       </div>
    //       <div className="form-group">
    //         <h4>Contraseña</h4>
    // <input
    //   type="password"
    //   className="form-control"
    //   id="password"
    //   name="password"
    //   value={password}
    //   placeholder="Enter password"
    //   onChange={onChange}
    // />
    //       </div>

    //       <div className="form-group">
    //         <button type="submit" className="btn btn-block">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </section>
    // </div>
    <div className="w-full h-[90vh] flex flex-col justify-center items-center ">
      {/* Cuadro Login */}
      <div className="w-[40%] h-[60%] p-4 bg-darkMainColor text-white flex flex-col justify-between items-center rounded-md">
        <section id="heading" className="w-[80%] text-center">
          <h1 className="text-3xl my-3">Login</h1>
          <p className="text-xl my-3">Inicia sesión</p>
          <p>
            ¿Aún no tienes cuenta?{" "}
            <a className="font-bold underline">
              {" "}
              <Link to="/register">Regístrate.</Link>
            </a>
          </p>
        </section>

        <section
          id="form"
          className="w-[80%] h-full flex flex-col justify-around"
        >
          <form onSubmit={onSubmit}>
            <div className="mb-2">
              <h4 className="text-xl">Correo electrónico</h4>
              <input
                type="email"
                className="w-full p-2 border-[1px] border-darkMainColor rounded-md mb-2"
                id="email"
                name="email"
                value={email}
                placeholder="Ingresa tu correo electrónico"
                onChange={onChange}
              />
            </div>
            <div className="mb-2">
              <h4 className="text-xl">Contraseña</h4>
              <input
                type="password"
                className="w-full p-2 border-[1px] border-darkMainColor rounded-md mb-2"
                id="password"
                name="password"
                value={password}
                placeholder="Ingresa tu contraseña"
                onChange={onChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
