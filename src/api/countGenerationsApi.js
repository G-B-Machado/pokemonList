import axios from 'axios';

const getCountPokemonGeneration = async function (setCount) {
  const result = await axios.get('https://pokeapi.co/api/v2/generation/');
  setCount(result.data.count);
};

export default getCountPokemonGeneration;
