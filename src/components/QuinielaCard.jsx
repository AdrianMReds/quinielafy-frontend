import React from "react";
import { Link } from "react-router-dom";

const QuinielaCard = ({ quiniela }) => {
  return (
    <div className="goal">
      <h2>{quiniela.name}</h2>
      <Link to={`/quiniela/${quiniela._id}`}>
        <button className="btn">Entrar</button>
      </Link>
    </div>
  );
};

export default QuinielaCard;
