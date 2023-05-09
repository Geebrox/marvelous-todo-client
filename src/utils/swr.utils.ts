import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_HOST}/api`,
  headers: { 'Content-Type': 'application/json', Accept: '*' },
});

export const fetcher = (...params: Parameters<typeof instance>) => {
  return instance(...params).then((response) => response.data);
};
