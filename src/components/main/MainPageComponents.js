import React from 'react';
import { Link } from 'react-router-dom';

const MainPageComponents = () => {
  return (
    <div>
      MainPageComponents
      <Link to={`/boards`}>게시판 기능</Link>
    </div>
  );
};

export default MainPageComponents;
