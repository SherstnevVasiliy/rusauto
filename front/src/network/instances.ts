import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://0.0.0.0:8888/api/',
  timeout: 2000,
  withCredentials: false,
});
