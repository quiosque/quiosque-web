import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5238/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;