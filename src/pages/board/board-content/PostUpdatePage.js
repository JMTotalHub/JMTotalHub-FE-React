import React from 'react';
import PostUpdateComponent from '../../../components/board/post/PostUpdateComponent';
import { useParams } from 'react-router-dom';

const PostUpdatePage = () => {
  const { postId } = useParams();
  return (
    <div>
      <h1>게시글 수정 페이지</h1>
      <PostUpdateComponent postId={postId} />
    </div>
  );
};

export default PostUpdatePage;
