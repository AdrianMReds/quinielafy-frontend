import React from "react";
import { Link } from "react-router-dom";
import { copyToClipboard } from "../../utils/functions";
import { toast } from "react-toastify";
import { EditFilled } from "@ant-design/icons";

const formatDate = (date) => {
  const fecha = new Date(date);

  const dia = fecha.getUTCDate();
  const mes = fecha.getUTCMonth() + 1; // Sumamos 1 porque getUTCMonth devuelve valores de 0 a 11
  const anio = fecha.getUTCFullYear();

  return `${dia.toString().padStart(2, "0")}/${mes
    .toString()
    .padStart(2, "0")}/${anio}`;
};

const AdminQuinielaCard = ({ quiniela }) => {
  console.log(quiniela);
  return (
    <div className="w-full md:w-[30%] relative h-64 m-3 p-3 bg-darkMainColor text-white rounded-md ">
      <div className="w-full">
        <h2 className="text-xl h-10 my-3 border-b-2 border-b-white">
          {quiniela?.name}
        </h2>
        <p className="my-1 text-nowrap overflow-hidden text-ellipsis">{`Torneo: ${quiniela?.tournament.name}`}</p>
        <p className="my-1">{`Jornada ${quiniela?.currentJornada}`}</p>
        <p className="text-nowrap overflow-hidden text-ellipsis">
          Administrador:{" "}
          <a className="underline" href="#">
            {quiniela.admin.name}
          </a>
        </p>
        <p>Fecha de creación: {formatDate(quiniela.createdAt)}</p>
        <Link to={`/admin/quiniela/${quiniela?._id}`}>
          <button className="p-3 absolute bg-white text-darkMainColor rounded-md w-[90%] bottom-3 left-[50%] translate-x-[-50%]">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminQuinielaCard;
