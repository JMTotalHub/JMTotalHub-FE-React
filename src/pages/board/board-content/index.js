import React from 'react';
import { Route, Routes, Outlet, useParams } from 'react-router-dom';

import PostList from './PostListPage';
import PostDetailsPage from './PostDetailsPage';

const BoardContentPage = () => {
  // const { boardId } = useParams();

  return (
    <div>
      <h2>특정 게시판에 대한 내용</h2>
      <Routes>
        <Route path="posts" element={<PostList />} />
        <Route path="posts/:postId" element={<PostDetailsPage />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default BoardContentPage;
