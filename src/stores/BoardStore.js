import { configureStore } from '@reduxjs/toolkit';

import boardListSlice from '../features/board/board/slices/BoardListSlice';

import postListSlice from '../features/board/post/slices/PostListSlice';
import postDetailsSlice from '../features/board/post/slices/PostDetailsSlice';
import postCreateSlice from '../features/board/post/slices/postCreateSlice';
import postUpdateSlice from '../features/board/post/slices/postUpdateSlice';
import PostDeleteSlice from '../features/board/post/slices/PostDeleteSlice';

import commentListSlice from '../features/board/comment/slices/CommentListSlice';

export const boardStore = configureStore({
  reducer: {
    boardList: boardListSlice,
    postList: postListSlice,
    postDetails: postDetailsSlice,
    postCreate: postCreateSlice,
    postUpdate: postUpdateSlice,
    postDelete: PostDeleteSlice,
    commentList: commentListSlice,
  },
});
