import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './PostSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
