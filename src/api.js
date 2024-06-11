import axios from 'axios';

const API_URL = process.env.REACT_APP_EXPRESS_API_URL;

// API 호출 헬퍼 함수
const api = axios.create({
  baseURL: API_URL,
});

export default api;
