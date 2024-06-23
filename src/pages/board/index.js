import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import PostList from './PostList';
import PostDetails from './PostDetails';

const Board = () => {
  return (
    <div>
      <h1>Board index.js</h1>
      <h2>이곳에 게시판 기능의 공통 부분 작성</h2>
      <Routes>
        <Route path="/:boardId/post-list" element={<PostList />} />
        <Route path="/post-details" element={<PostDetails />} />
      </Routes>

      <Outlet />
    </div>
  );
};

export default Board;
