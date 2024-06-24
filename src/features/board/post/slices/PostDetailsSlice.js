import { createSlice } from '@reduxjs/toolkit';
import PostDetailsByPostId from '../actions/PostDetailsAction';

const PostDetailsSlice = createSlice({
  name: 'postDetails',
  initialState: {
    postDetails: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostDetailsByPostId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(PostDetailsByPostId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.postDetails = action.payload;
      })
      .addCase(PostDetailsByPostId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default PostDetailsSlice.reducer;
