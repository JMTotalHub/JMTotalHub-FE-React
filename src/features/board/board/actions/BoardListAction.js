import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../utils/api';

const boardListByNothing = createAsyncThunk(
  'boardList/boardListByNoting',
  async () => {
    const response = await api.get(`/boards`);
    return response.data;
  }
);

export default boardListByNothing;
