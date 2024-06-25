import React from 'react';
import { useParams } from 'react-router-dom';

import CommentListComponent from '../../../components/board/comment/CommentListComponent';
import PostDetailsComponent from '../../../components/board/post/PostDetailsComponent';

const PostDetailsPage = () => {
  const { postId } = useParams();

  return (
    <>
      <PostDetailsComponent postId={postId}></PostDetailsComponent>
      <CommentListComponent postId={postId}></CommentListComponent>
    </>
  );
};

export default PostDetailsPage;
