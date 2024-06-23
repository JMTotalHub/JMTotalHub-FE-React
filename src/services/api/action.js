import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk 액션 생성
// (식별용 타입, 비동기 함수)
export const fetchPostsByBoardId = createAsyncThunk(
  'posts/fetchPostsByBoardId',
  async ({ boardId, queryData }) => {
    // API 요청 수행
    const response = await axios.get(
      `http://localhost:5000/boards/${boardId}/posts`,
      {
        params: queryData,
      }
    );
    // API 응답 데이터 반환
    return response.data;
  }
);

// // Thunk를 안쓰는 경우
// import axios from 'axios';
// import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from './postsSlice';

// export const fetchPostsByBoardId = ({ boardId, queryData }) => async (dispatch) => {
//   dispatch(fetchPostsRequest());
//   try {
//     const response = await axios.get(
//       `http://localhost:5000/boards/${boardId}/posts`,
//       {
//         params: queryData,
//       }
//     );
//     dispatch(fetchPostsSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchPostsFailure(error.message));
//   }
// };
