import React from "react";
import { Link } from "react-router-dom";

const QuinielaCard = ({ quiniela, admin }) => {
  return (
    <div className="w-[30%] relative h-60 m-3 p-3 bg-darkMainColor text-white rounded-md">
      <div className="w-full">
        <h2 className="text-xl h-10 my-3 border-b-2 border-b-white">
          {quiniela?.name}
        </h2>
        <p className="my-1">{`Torneo: ${quiniela?.tournament.name}`}</p>
        <p className="my-1">{`Jornada ${quiniela?.currentJornada}`}</p>
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
