import axios from 'axios';
import {BASE_URL} from './config';
import {getAccessToken, getRefreshToken, setAccessToken} from './storage';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

// Request Interceptors
apiClient.interceptors.request.use(
  async config => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Response interceptors
apiClient.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 403) {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const {data} = await axios.post(`${BASE_URL}/user/refresh`, {
          refreshToken,
        });
        setAccessToken(data?.accessToken);
        error.config.headers.Authorization = `Bearer ${data?.accessToken}`;
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
