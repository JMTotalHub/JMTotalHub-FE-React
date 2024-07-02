import React from 'react';
import { Link } from 'react-router-dom';

const MainPageComponents = () => {
  return (
    <div>
      <h1>메인 페이지</h1>

      <h2>게시판</h2>
      <Link to={`/boards`}>게시판</Link>
    </div>
  );
};

export default MainPageComponents;
