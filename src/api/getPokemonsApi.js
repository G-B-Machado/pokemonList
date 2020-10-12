import axios from 'axios';

const getPokemon = async function (pokemonName) {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
  );
  return result.data;
};

export default getPokemon;
