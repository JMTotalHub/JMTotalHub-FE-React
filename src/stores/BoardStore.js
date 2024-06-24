import { configureStore } from '@reduxjs/toolkit';

import postListSlice from '../features/board/post/slices/PostListSlice';
import postDetailsSlice from '../features/board/post/slices/PostDetailsSlice';

export const boardStore = configureStore({
  reducer: {
    postList: postListSlice,
    postDetails: postDetailsSlice,
  },
});
