import { configureStore } from '@reduxjs/toolkit';

import boardListSlice from '../features/board/board/slices/BoardListSlice';

import postListSlice from '../features/board/post/slices/PostListSlice';
import postDetailsSlice from '../features/board/post/slices/PostDetailsSlice';
import postCreateSlice from '../features/board/post/slices/postCreateSlice';
import postUpdateSlice from '../features/board/post/slices/postUpdateSlice';
import PostDeleteSlice from '../features/board/post/slices/PostDeleteSlice';

import commentListSlice from '../features/board/comment/slices/CommentListSlice';
import commentCreateSlice from '../features/board/comment/slices/CommentCreateSlice';
import CommentDeleteSlice from '../features/board/comment/slices/CommentDeleteSlice';

export const boardStore = configureStore({
  reducer: {
    // 게시판
    boardList: boardListSlice,

    // 게시글
    postList: postListSlice,
    postDetails: postDetailsSlice,
    postCreate: postCreateSlice,
    postUpdate: postUpdateSlice,
    postDelete: PostDeleteSlice,

    // 댓글
    commentList: commentListSlice,
    commentCreate: commentCreateSlice,
    commentDelete: CommentDeleteSlice,
  },
});
