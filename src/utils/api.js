import axios from 'axios';

const ENV = process.env.REACT_APP_ENV;
const SERVER_IP = process.env.REACT_APP_SERVER_IP;
// const PROTOCOL = ENV === 'prod' ? 'https' : 'http';

const PROTOCOL = 'http';
const API_URL = `${PROTOCOL}://${SERVER_IP}`;

let api;

if (ENV === 'dev') {
  // 개발 환경의 API 호출 헬퍼 함수
  api = axios.create({
    baseURL: API_URL,
  });
} else if (ENV === 'prod') {
  // 배포 환경의 API 호출 헬퍼 함수
  api = axios.create({
    baseURL: `${API_URL}/api`,
  });
} else {
  // 기본 API 호출 헬퍼 함수 (환경 변수 설정이 없을 경우)
  api = axios.create({
    baseURL: API_URL,
  });
}

export default api;
