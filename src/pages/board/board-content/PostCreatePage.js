import React from 'react';
import PostCreateComponent from '../../../components/board/post/PostCreateComponent';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostCreatePage = () => {
  const { boardId } = useParams();
  const { pageNum } = useSelector((state) => state.postList);

  return (
    <div>
      <h1>게시글 작성 페이지</h1>
      <PostCreateComponent boardId={boardId} pageNum={pageNum} />
    </div>
  );
};

export default PostCreatePage;
