import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

const charactersAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

const getCharacters = (pageNumber: number, queryName: string) => {
  return charactersAPI.get(`/character/?page=${pageNumber}&name=${queryName}`);
};

export default getCharacters;
