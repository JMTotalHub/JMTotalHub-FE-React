import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostDetailsComponent from '../../../components/board/post/PostDetailsComponent';
import CommentListComponent from '../../../components/board/comment/CommentListComponent';

const PostDetailsPage = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();

  return (
    <>
      <PostDetailsComponent postId={postId}></PostDetailsComponent>
      <CommentListComponent postId={postId}></CommentListComponent>
    </>
  );
};

export default PostDetailsPage;
