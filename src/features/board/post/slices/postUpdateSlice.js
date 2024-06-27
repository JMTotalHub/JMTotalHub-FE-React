import { createSlice } from '@reduxjs/toolkit';
import postUpdateInitByPostId from '../actions/PostUpdateInitAction';
import postUpdateByPostIdAndData from '../actions/PostUpdateAction';

const postUpdateSlice = createSlice({
  name: 'postUpdate',
  initialState: {
    postDetails: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postUpdateInitByPostId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postUpdateInitByPostId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.postDetails = action.payload;
      })
      .addCase(postUpdateInitByPostId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postUpdateByPostIdAndData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postUpdateByPostIdAndData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.postDetails = action.payload;
      })
      .addCase(postUpdateByPostIdAndData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postUpdateSlice.reducer;
