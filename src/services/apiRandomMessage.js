import axios from 'axios';
const BASE_URL = 'https://api.chucknorris.io/jokes/random';

const getApiResult = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export default getApiResult;
