import React from "react";
import { Link } from "react-router-dom";

const QuinielaCard = ({ quiniela, admin }) => {
  console.log(quiniela);
  console.log(admin);
  return (
    <div className="goal">
      <div className="info" style={{ padding: 10 }}>
        <h2>{quiniela.name}</h2>
        {admin && <h5>{`Código de entrada: ${quiniela.entranceCode}`}</h5>}
        <h5>Torneo: {quiniela.tournament.name}</h5>
      </div>

      <Link to={`/quiniela/${quiniela._id}`}>
        <button className="btn">Entrar</button>
      </Link>
    </div>
  );
};

export default QuinielaCard;
