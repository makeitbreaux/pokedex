import React from "react";
import PokeCard from "./PokeCard";
import "./PokeDex.css";

/** Index of Pokemon: show individual cards. */

function PokeDex(props) {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="PokeDex">
      <h2 className="PokeDex-title">Pokedex</h2>
      <div className="PokeDex-cards">
        {props.pokemon.map(p => (
          <PokeCard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
  );
}

export default PokeDex;
