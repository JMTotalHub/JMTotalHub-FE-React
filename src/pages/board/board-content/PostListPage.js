import React from 'react';
import PostsListComponent from '../../../components/board/post/PostListComponent';
import { useParams } from 'react-router-dom';

const PostsListPage = () => {
  const { boardId } = useParams();

  return <PostsListComponent boardId={boardId}></PostsListComponent>;
};

export default PostsListPage;
