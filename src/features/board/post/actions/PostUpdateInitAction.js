import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../utils/api';

const postUpdateInitByPostId = createAsyncThunk(
  'postUpdateInit/postUpdateInitByPostId',
  async ({ postId }) => {
    console.log('action');
    console.log(postId);
    const response = await api.get(`boards/posts/${postId}`);
    console.log(response.data);
    return response.data;
  }
);

export default postUpdateInitByPostId;
