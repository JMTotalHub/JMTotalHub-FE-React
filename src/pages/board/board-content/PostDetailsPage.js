import React from 'react';
import { Link, useParams } from 'react-router-dom';

import CommentListComponent from '../../../components/board/comment/CommentListComponent';
import PostDetailsComponent from '../../../components/board/post/PostDetailsComponent';
import { useSelector } from 'react-redux';
import PostDeleteButtonComponent from '../../../components/board/post/PostDeleteButtonComponent';
import CommentCreateComponent from '../../../components/board/comment/CommentCreateComponent';

const PostDetailsPage = () => {
  const { boardId, postId } = useParams();
  const { pageNum } = useSelector((state) => state.postList);

  console.log('pageNum : ' + pageNum);

  return (
    <>
      <PostDetailsComponent postId={postId}></PostDetailsComponent>
      <Link to="edit">글 수정</Link>
      <Link to={`/boards/${boardId}/posts?page=${pageNum}`}>목록</Link>
      <PostDeleteButtonComponent
        boardId={boardId}
        postId={postId}
        pageNum={pageNum}
      />
      <CommentCreateComponent postId={postId}></CommentCreateComponent>
      <CommentListComponent postId={postId}></CommentListComponent>
    </>
  );
};

export default PostDetailsPage;
