import axios from 'axios';

const ENV = process.env.REACT_APP_ENV;
const SERVER_IP = process.env.REACT_APP_SERVER_IP;
// const PROTOCOL = ENV === 'prod' ? 'https' : 'http';

const PROTOCOL = 'http';
const API_URL = `${PROTOCOL}://${SERVER_IP}`;
const BASE_URL = ENV === 'prod' ? `${API_URL}/api` : `${API_URL}`;

// let api;
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// if (ENV === 'dev') {
//   console.log('dev 환경');
//   // 개발 환경의 API 호출 헬퍼 함수
//   api = axios.create({
//     baseURL: API_URL,
//     withCredentials: true,
//   });
// } else if (ENV === 'prod') {
//   // 배포 환경의 API 호출 헬퍼 함수
//   api = axios.create({
//     baseURL: `${API_URL}/api`,
//     withCredentials: true,
//   });
// } else {
//   // 기본 API 호출 헬퍼 함수 (환경 변수 설정이 없을 경우)
//   api = axios.create({
//     baseURL: API_URL,
//     withCredentials: true,
//   });
// }

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

    if (
      error.response.data.err === 'TokenExpiredError' &&
      !originalRequest._retry
    ) {
      // 무한 루프 방지용
      originalRequest._retry = true;

      try {
        const response = await axios.post(`${BASE_URL}/auth/new-token`);

        // 기존 요청 재시도
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
