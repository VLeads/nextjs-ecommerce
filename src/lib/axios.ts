import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/trpc', // The base URL for your tRPC API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;