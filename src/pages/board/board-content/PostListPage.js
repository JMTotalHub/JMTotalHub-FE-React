import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import postListByBoardId from '../../../features/board/post/actions/PostListAction';
import PostsListComponent from '../../../components/board/post/PostListComponent';

const PostsListPage = () => {
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
    <PostsListComponent
      postList={postList}
      totalPage={totalPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      status={status}
      error={error}
    ></PostsListComponent>
  );
};

export default PostsListPage;
