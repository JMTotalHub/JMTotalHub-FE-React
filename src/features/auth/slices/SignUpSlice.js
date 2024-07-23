import { createSlice } from '@reduxjs/toolkit';
import authSignUpByUserData from '../actions/SignUpAction';

const authSignUpSlice = createSlice({
  name: 'authSignUp',
  initialState: {
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUpByUserData.pending, (state) => {
        // API ��û ���� ����
        state.status = 'loading';
      })
      .addCase(authSignUpByUserData.fulfilled, (state, action) => {
        // API ��û ���� ����
        state.status = 'succeeded';
        state.token = action.payload.token;
      })
      .addCase(authSignUpByUserData.rejected, (state, action) => {
        // API ��û ���� ����
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSignUpSlice;
