import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

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
    <div>
      <section className="heading">
        <h1>
          <FaUser /> Regístrate
        </h1>
        <p>Crea una cuenta</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <h4>Nombre</h4>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Ingresa tu nombre"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <h4>Apellidos</h4>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={lastname}
              placeholder="Ingresa tus apellidos"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <h4>Fecha de nacimiento</h4>
            <DatePicker
              style={{ width: "100%" }}
              format={["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"]}
              placeholder="Tu fecha de nacimiento DD/MM/AAAA"
              name="birthday"
              onChange={onChangeBirthday}
            />
          </div>
          <div className="form-group">
            <h4>Correo electrónico</h4>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <h4>Contraseña</h4>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <h4>Confirma tu contraseña</h4>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
