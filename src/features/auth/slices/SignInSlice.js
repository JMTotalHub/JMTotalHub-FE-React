import { createSlice } from '@reduxjs/toolkit';
import authSignInByUserData from '../actions/SIgnInAction';

const authSignInSlice = createSlice({
  name: 'authSignIn',
  initialState: {
    accessToken: null,
    user: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignInByUserData.pending, (state) => {
        // API ��û ���� ����
        state.status = 'loading';
      })
      .addCase(authSignInByUserData.fulfilled, (state, action) => {
        // API ��û ���� ����
        state.status = 'succeeded';
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(authSignInByUserData.rejected, (state, action) => {
        // API ��û ���� ����
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSignInSlice;
