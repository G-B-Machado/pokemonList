import React from 'react';

export default function Card({ pokemonName, onClick }) {
  return (
    <div className="list_pokemon">
      <label className="list_label_pokemon">{pokemonName}</label>
      <button className="list_button" onClick={onClick}>
        Status
      </button>
    </div>
  );
}
