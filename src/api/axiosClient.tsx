import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Example: Attach token if available
    const token = import.meta.env.VITE_API_KEY as string;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No response from server:', error.request);
    } else {
      console.error('Axios error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
