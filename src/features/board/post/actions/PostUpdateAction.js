import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../utils/api';

const postUpdateByPostIdAndData = createAsyncThunk(
  'postCreate/postUpdateByPostIdAndData',
  async ({ postId, bodyData }) => {
    const response = await api.put(`boards/posts/${postId}`, bodyData);
    return response.data;
  }
);

export default postUpdateByPostIdAndData;
