import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../utils/api';

const PostDetailsByPostId = createAsyncThunk(
  'postDetails/postDetailsByPostId',
  async ({ postId }) => {
    const response = await api.get(`boards/posts/${postId}`);
    console.log('action go!!!!!!!!!!!!');
    console.log(response.data);
    return response.data;
  }
);

export default PostDetailsByPostId;
