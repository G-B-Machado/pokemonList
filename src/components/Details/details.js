import React from 'react';
import '../../App.css';
export default function Details({ pokemon }) {
  return (
    <div className="card_pokemon">
      <header className="card_header">
        <img src={pokemon.sprites && pokemon.sprites.front_default} alt="" />
        <h1>
          #{pokemon.id} {pokemon.name}
        </h1>
      </header>
      <div className="card_body_detail">
        <label>Altura: {pokemon.height}</label>
        <label>Peso: {pokemon.weight}</label>
        <ul>
          {pokemon.types &&
            pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
        </ul>
      </div>
      <div className="card_body_status">
        <ul>
          {pokemon.stats &&
            pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name} - {stat.base_stat}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
