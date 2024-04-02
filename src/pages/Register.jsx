import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    birthday: dayjs().toDate(),
    email: "",
    password: "",
    password2: "",
  });

  const { name, lastname, birthday, email, password, password2 } = formData;

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

  const onChangeBirthday = (date, stringDate) => {
    setFormData((prevState) => ({
      ...prevState,
      birthday: date.toDate(),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password != password2) {
      toast.error("Asegurate de escribir la misma contraseña en ambos campos");
    } else {
      const userData = {
        name: `${name} ${lastname}`,
        email,
        password,
        birthday,
        country: "Mexico",
        state: "Nuevo León",
        city: "Monterrey",
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    // <div>
    //   <section className="heading">
    //     <h1>
    //       <FaUser /> Regístrate
    //     </h1>
    //     <p>Crea una cuenta</p>
    //   </section>

    //   <section className="form">
    //     <form onSubmit={onSubmit}>
    // <div className="form-group">
    //   <h4>Nombre</h4>
    //   <input
    //     type="text"
    //     className="form-control"
    //     id="name"
    //     name="name"
    //     value={name}
    //     placeholder="Ingresa tu nombre"
    //     onChange={onChange}
    //   />
    // </div>
    // <div className="form-group">
    //   <h4>Apellidos</h4>
    //   <input
    //     type="text"
    //     className="form-control"
    //     id="lastname"
    //     name="lastname"
    //     value={lastname}
    //     placeholder="Ingresa tus apellidos"
    //     onChange={onChange}
    //   />
    // </div>
    // <div className="form-group">
    //   <h4>Fecha de nacimiento</h4>
    //   <DatePicker
    //     style={{ width: "100%" }}
    //     format={["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"]}
    //     placeholder="Tu fecha de nacimiento DD/MM/AAAA"
    //     name="birthday"
    //     onChange={onChangeBirthday}
    //   />
    // </div>
    // <div className="form-group">
    //   <h4>Correo electrónico</h4>
    //   <input
    //     type="email"
    //     className="form-control"
    //     id="email"
    //     name="email"
    //     value={email}
    //     placeholder="Enter your email"
    //     onChange={onChange}
    //   />
    // </div>
    // <div className="form-group">
    //   <h4>Contraseña</h4>
    //   <input
    //     type="password"
    //     className="form-control"
    //     id="password"
    //     name="password"
    //     value={password}
    //     placeholder="Enter password"
    //     onChange={onChange}
    //   />
    // </div>
    // <div className="form-group">
    //   <h4>Confirma tu contraseña</h4>
    //   <input
    //     type="password"
    //     className="form-control"
    //     id="password2"
    //     name="password2"
    //     value={password2}
    //     placeholder="Confirm password"
    //     onChange={onChange}
    //   />
    // </div>
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
      <div className="w-[45%] p-4 bg-darkMainColor text-white flex flex-col justify-between items-center rounded-md">
        <section id="heading" className="w-[80%] text-center">
          <h1 className="text-3xl my-0">Regístrate</h1>
          <p className="text-xl my-0">Crea una cuenta</p>
          <p>
            ¿Ya tienes cuenta?{" "}
            <a className="font-bold underline">
              {" "}
              <Link to="/login">Inicia sesión.</Link>
            </a>
          </p>
        </section>

        <section
          id="form"
          className="w-[80%] h-full flex flex-col justify-around"
        >
          <form onSubmit={onSubmit}>
            <div className="flex justify-between mt-2">
              <div className="mb-2 w-[48%]">
                <h4 className="text-xl">Nombre</h4>
                <input
                  type="text"
                  className="userDataInput"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Ingresa tu nombre"
                  onChange={onChange}
                />
              </div>

              <div className="mb-2 w-[48%]">
                <h4 className="text-xl">Apellidos</h4>
                <input
                  type="text"
                  className="userDataInput"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  placeholder="Ingresa tus apellidos"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="mb-2">
              <h4 className="text-xl">Fecha de nacimiento</h4>
              <DatePicker
                style={{ width: "100%" }}
                format={["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"]}
                placeholder="Tu fecha de nacimiento DD/MM/AAAA"
                name="birthday"
                onChange={onChangeBirthday}
              />
            </div>

            <div className="mb-2">
              <h4 className="text-xl">Correo electrónico</h4>
              <input
                type="email"
                className="userDataInput"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>

            <div className="mb-2">
              <h4 className="text-xl">Contraseña</h4>
              <input
                type="password"
                className="userDataInput"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={onChange}
              />
            </div>

            <div className="mb-2">
              <h4 className="text-xl">Confirma tu contraseña</h4>
              <input
                type="password"
                className="userDataInput"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={onChange}
              />
            </div>

            <div className="mb-2 mt-4">
              <button
                type="submit"
                className="w-full p-3 bg-white text-darkMainColor rounded-md"
              >
                Crear cuenta
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
