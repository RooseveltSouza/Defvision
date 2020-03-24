import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.107:3333',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    throw error;
  },
);

export default api;
