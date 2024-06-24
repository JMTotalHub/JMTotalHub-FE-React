import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../../utils/api'

// Thunk 액션 생성
// (식별용 타입, 비동기 함수)
export const postListByBoardId = createAsyncThunk(
  'posts/postListByBoardId',
  async ({ boardId, queryData }) => {
    // API 요청 수행
    const response = await api.get(
      `/boards/${boardId}/posts`,
      {
        params: queryData,
      }
    );
    // API 응답 데이터 반환
    return response.data;
  }
);
