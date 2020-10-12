import axios from 'axios';

const getGenerations = async function (url) {
  const result = await axios.get(url);
  return result.data;
};

export default getGenerations;
