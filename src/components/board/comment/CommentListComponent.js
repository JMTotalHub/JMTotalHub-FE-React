import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../common/Pagination';

import commentListByPostId from '../../../features/board/comment/actions/CommentListAction';
import CommentDetailsComponent from './CommentDetailsComponent';

const CommentListComponent = ({ postId }) => {
  const dispatch = useDispatch();

  const { commentList, totalPage, pageNum, status, error } = useSelector(
    (state) => state.commentList
  );

  const { status: commentCreateStatus } = useSelector(
    (state) => state.commentCreate
  );

  console.log('commentCreateStatus : ' + commentCreateStatus);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(
      commentListByPostId({
        postId,
        queryData: { pageNum: currentPage, dataPerPage: 10 },
      })
    );
  }, [currentPage, commentCreateStatus]);

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>생성 시간</th>
          </tr>
        </thead>
        <tbody>
          {commentList.map((comment) => (
            <CommentDetailsComponent
              commentId={comment.id}
              commentContent={comment.content}
              commentCreatedAt={comment.created_at}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CommentListComponent;
