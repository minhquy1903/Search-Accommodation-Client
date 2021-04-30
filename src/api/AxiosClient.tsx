import axios from 'axios';
import queryString from 'query-string';
import dotenv from 'dotenv';

dotenv.config();

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  async (response) => {
    if (response && response.data) return response.data;
    return await response.data;
  },
  (err) => {
    throw err;
  },
);

export default axiosClient;
