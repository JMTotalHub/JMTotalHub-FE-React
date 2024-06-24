import React, { useEffect } from 'react';
import Pagination from '../../common/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import commentListByPostId from '../../../features/board/comment/actions/CommentListAction';

const CommentListComponent = ({ postId }) => {
  const dispatch = useDispatch();

  const { commentList, totalPage, currentPage, status, error } = useSelector(
    (state) => state.commentList
  );

  useEffect(() => {
    dispatch(
      commentListByPostId({
        postId,
      })
    );
  });

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
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.content}</td>
              <td>{new Date(comment.created_at).toLocaleString()}</td>
            </tr>
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
