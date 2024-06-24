import { configureStore } from '@reduxjs/toolkit';

import postListSlice from '../features/board/slices/post/PostListSlice';
import postDetailsSlice from '../features/board/slices/post/PostDetailsSlice';

export const boardStore = configureStore({
  reducer: {
    postList: postListSlice,
    postDetails: postDetailsSlice,
  },
});
