import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postListByBoardId } from '../../features/board/actions/PostListAction';
import { useParams } from 'react-router-dom';
import PostList from '../../components/board/PostList'

const PostsList = () => {
  const { boardId } = useParams(); // URL 파라미터에서 boardId를 가져옴

  const dispatch = useDispatch();
  const { postList, totalPage, pageNum, status, error } = useSelector(
    (state) => state.postList
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      postListByBoardId({
        boardId,
        // queryData: { pageNum: 1, dataPerPage: 10, searchType: 'title', searchText: '테스트' },
        queryData: { pageNum: currentPage, dataPerPage: 10 },
      })
    );
  }, [currentPage]);

  return (
    <PostList
      postList={postList}
      totalPage={totalPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      status={status}
      error={error}
    ></PostList>
  );
};

export default PostsList;
