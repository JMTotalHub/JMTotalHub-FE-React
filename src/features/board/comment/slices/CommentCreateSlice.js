import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import commentCreateByPostIdAndData from '../actions/CommentCreateAction';

const CommentCreateSlice = createSlice({
  name: 'commentCreate',
  initialState: {
    commentDetails: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentCreateByPostIdAndData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(commentCreateByPostIdAndData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.commentDetails = action.payload;
      })
      .addCase(commentCreateByPostIdAndData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default CommentCreateSlice.reducer;
