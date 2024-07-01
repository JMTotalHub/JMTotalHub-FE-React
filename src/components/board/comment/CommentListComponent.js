import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../common/Pagination';

import commentListByPostId from '../../../features/board/comment/actions/CommentListAction';
import CommentDetailsComponent from './CommentDetailsComponent';
import CommentDeleteByCommentId from '../../../features/board/comment/actions/CommentDeleteAction';

import {
  Table,
  TableHead,
  TableHeadCell,
  TableRow,
  TableCell,
  DeleteButton,
  IdColumn,
  ContentColumn,
  CreatedAtColumn,
  ButtonColumn,
} from './styles/CommentListStyles';

const CommentListComponent = ({ postId }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const { commentList, totalPage, pageNum, status, error } = useSelector(
    (state) => state.commentList
  );

  const { status: commentCreateStatus } = useSelector(
    (state) => state.commentCreate
  );

  const { status: commentDeleteStatus } = useSelector(
    (state) => state.commentDelete
  );

  const handleDelete = (commentId) => {
    console.log('commentId : ' + commentId);
    dispatch(CommentDeleteByCommentId({ commentId }));
  };

  useEffect(() => {
    dispatch(
      commentListByPostId({
        postId,
        queryData: { pageNum: currentPage, dataPerPage: 10 },
      })
    );
  }, [currentPage, commentCreateStatus, commentDeleteStatus]);

  if (status === 'idle') {
    return <div>Loading... 데이터를 요청합니다.</div>;
  }

  if (status === 'loading' || commentCreateStatus === 'loading') {
    return <div>Loading... 데이터를 불러오고 있습니다.</div>;
  }

  if (status === 'failed') {
    console.log('api 통신 에러 : ' + error);
    return <div>Error: 게시글 데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <div>
      <Table>
        <colgroup>
          <IdColumn />
          <ContentColumn />
          <CreatedAtColumn />
          <ButtonColumn />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>내용</TableHeadCell>
            <TableHeadCell>생성 시간</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <tbody>
          {commentList.map((comment) => (
            <TableRow key={comment.id}>
              <CommentDetailsComponent
                commentId={comment.id}
                commentContent={comment.content}
                commentCreatedAt={comment.created_at}
              />
              <TableCell>
                <DeleteButton onClick={() => handleDelete(comment.id)}>
                  삭제
                </DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CommentListComponent;
