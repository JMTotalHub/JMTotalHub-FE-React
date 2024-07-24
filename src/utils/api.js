import axios from 'axios';

const ENV = process.env.REACT_APP_ENV;
const SERVER_IP = process.env.REACT_APP_SERVER_IP;
// const PROTOCOL = ENV === 'prod' ? 'https' : 'http';

const PROTOCOL = 'http';
const API_URL = `${PROTOCOL}://${SERVER_IP}`;
const BASE_URL = ENV === 'prod' ? `${API_URL}/api` : `${API_URL}`;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    console.log('정상요청');
    return config;
  },
  (error) => {
    console.log('비정상요청');
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('정상');
    return response;
  },
  async (error) => {
    console.log(error.response.data.err);
    const originalRequest = error.config;
    console.log('원래 요청 : ', originalRequest);

    if (
      error.response.data.err === 'TokenExpiredError' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await axios.post(
          `${BASE_URL}/auth/new-token`,
          {},
          {
            withCredentials: true,
          }
        );

        return api(originalRequest);
      } catch (refreshError) {
        console.log('토큰 갱신 실패', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
