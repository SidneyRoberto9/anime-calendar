import axios from 'axios';

export const airing = axios.create({
  baseURL: `${process.env.API}/animes-airing`,
});
