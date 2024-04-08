import React from "react";
import { Link } from "react-router-dom";
import { copyToClipboard } from "../utils/functions";
import { toast } from "react-toastify";
import { EditFilled } from "@ant-design/icons";

const QuinielaCard = ({ quiniela, admin }) => {
  return (
    <div className="w-full md:w-[35%] relative h-64 m-3 p-3 bg-darkMainColor text-white rounded-md">
      <div className="w-full">
        <h2 className="text-xl h-10 my-3 border-b-2 border-b-white">
          {quiniela?.name}
        </h2>
        {admin && (
          <div className="absolute bg-white px-2 py-1 w-fit rounded-md cursor-pointer hover:scale-105 duration-200 right-3 top-3">
            <EditFilled className="text-darkMainColor" />
          </div>
        )}
        <p className="my-1">{`Torneo: ${quiniela?.tournament.name}`}</p>
        <p className="my-1">{`Jornada ${quiniela?.currentJornada}`}</p>
        {admin && (
          <p className="my-1">
            Código de entrada:{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => {
                copyToClipboard(quiniela?.entranceCode);
                toast.success(
                  `El código ${quiniela?.entranceCode} ha sido copiado al portapapeles`
                );
              }}
            >
              {quiniela?.entranceCode}
            </span>
          </p>
        )}
        <Link to={`/quiniela/${quiniela?._id}`}>
          <button className="p-3 absolute bg-white text-darkMainColor rounded-md w-[90%] bottom-3 left-[50%] translate-x-[-50%]">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuinielaCard;
