import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import postListByBoardId from '../../../features/board/post/actions/PostListAction';
import Pagination from '../../common/Pagination';

import {
  Container,
  Table,
  TableHead,
  TableHeadCell,
  TableCell,
  TableRow,
  IdColumn,
  TitleColumn,
  CreatedAtColumn,
} from './styles/PostListStyles'; // 스타일 컴포넌트 임포트

const PostsListComponent = ({ boardId }) => {
  const dispatch = useDispatch();
  const { postList, totalPage, pageNum, status, error } = useSelector(
    (state) => state.postList
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState(
    pageParam ? parseInt(pageParam) : 1
  );

  const handlePageNum = (page) => {
    setSearchParams({ page });
    setCurrentPage(page);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();

    if (isToday) {
      return (
        '당일 ' +
        date.toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false, // 24시간제로 설정
        })
      );
    } else {
      // toLocaleDateString 사용 후 마지막 마침표 제거
      let formattedDate = date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      if (formattedDate.endsWith('.')) {
        formattedDate = formattedDate.slice(0, -1);
      }
      return formattedDate;
    }
  };

  useEffect(() => {
    dispatch(
      postListByBoardId({
        boardId,
        // queryData: { pageNum: 1, dataPerPage: 10, searchType: 'title', searchText: '테스트' },
        queryData: { pageNum: currentPage, dataPerPage: 10 },
      })
    );
  }, [currentPage]);

  if (status === 'idle') {
    return <div>Loading... 데이터를 요청합니다.</div>;
  }

  if (status === 'loading') {
    return <div>Loading... 데이터를 불러오고 있습니다.</div>;
  }

  if (status === 'failed') {
    console.log('api 통신 에러 : ' + error);
    return <div>Error: 게시글 데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <Container>
      <Table>
        <colgroup>
          <IdColumn />
          <TitleColumn />
          <CreatedAtColumn />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>제목</TableHeadCell>
            <TableHeadCell>작성일</TableHeadCell>
          </TableRow>
        </TableHead>
        <tbody>
          {postList.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>
                <Link to={`${post.id}`}>{post.title}</Link>
              </TableCell>
              <TableCell>
                {/* {new Date(post.created_at).toLocaleString()} */}
                {formatDate(post.created_at)}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={handlePageNum}
      />
    </Container>
  );
};

export default PostsListComponent;
