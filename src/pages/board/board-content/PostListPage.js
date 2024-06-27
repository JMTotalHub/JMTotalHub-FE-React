import React from 'react';
import PostsListComponent from '../../../components/board/post/PostListComponent';
import { Link, useParams } from 'react-router-dom';

const PostsListPage = () => {
  const { boardId } = useParams();

  return (
    <div>
      <PostsListComponent boardId={boardId} />
      <Link to="/boards">게시판 목록</Link>
      <Link to="new">글 작성</Link>
    </div>
  );
};
export default PostsListPage;
