import React from 'react';
import PostCreateComponent from '../../../components/board/post/PostCreateComponent';
import { useParams } from 'react-router-dom';

const PostCreatePage = () => {
  const { boardId } = useParams();
  return (
    <div>
      <h1>게시글 작성 페이지</h1>
      <PostCreateComponent boardId={boardId} />
    </div>
  );
};

export default PostCreatePage;
