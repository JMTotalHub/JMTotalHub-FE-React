import React from 'react';
import { Link, useParams } from 'react-router-dom';

import CommentListComponent from '../../../components/board/comment/CommentListComponent';
import PostDetailsComponent from '../../../components/board/post/PostDetailsComponent';

const PostDetailsPage = () => {
  const { postId } = useParams();

  return (
    <>
      <PostDetailsComponent postId={postId}></PostDetailsComponent>
      <CommentListComponent postId={postId}></CommentListComponent>
      <Link to="edit">글 수정</Link>
    </>
  );
};

export default PostDetailsPage;
