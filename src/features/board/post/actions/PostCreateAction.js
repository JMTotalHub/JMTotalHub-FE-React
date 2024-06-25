import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react';
import api from '../../../../utils/api';

const postCreateByBoardIdAndData = createAsyncThunk(
  'postCreate/postCreateByBoardIdAndData',
  async ({ boardId, bodyData }) => {
    console.log('action!!!');
    console.log(boardId);
    console.log(bodyData);

    const response = await api.post(`boards/${boardId}/posts`, bodyData);

    return response.data;
  }
);

export default postCreateByBoardIdAndData;
