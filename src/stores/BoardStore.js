import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/board/slices/PostListSlice';

export const boardStore = configureStore({
  reducer: {
    postList: postsReducer,
  },
});
