import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByBoardId } from '../../services/api/action';
import { useParams } from 'react-router-dom';

const PostsList = () => {
  const { boardId } = useParams(); // URL 파라미터에서 boardId를 가져옴

  const dispatch = useDispatch();
  const { postList, totalPage, pageNum, status, error } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    // Thunk 액션 디스패치
    dispatch(
      fetchPostsByBoardId({
        boardId,
        queryData: { pageNum: 1, dataPerPage: 10 },
      })
    );
  }, [dispatch, boardId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {postList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>Total Pages: {totalPage}</div>
      <div>Current Page: {pageNum}</div>
    </div>
  );
};

export default PostsList;
