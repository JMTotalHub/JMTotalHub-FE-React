import React from 'react';
import PostUpdateComponent from '../../../components/board/post/PostUpdateComponent';
import { useParams } from 'react-router-dom';

const PostUpdatePage = () => {
  const { boardId, postId } = useParams();
  console.log('boardId1 : ' + boardId);
  console.log('postId1 : ' + postId);
  return (
    <div>
      <h1>게시글 수정 페이지</h1>
      <PostUpdateComponent boardId={boardId} postId={postId} />
    </div>
  );
};

export default PostUpdatePage;
