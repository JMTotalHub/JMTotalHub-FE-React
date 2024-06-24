import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import BoardContentPage from './board-content';

const Board = () => {
  return (
    <div>
      <h1>게시판 기능의 공통 부분 작성</h1>
      <Routes>
        <Route path="/:boardId/*" element={<BoardContentPage />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Board;
