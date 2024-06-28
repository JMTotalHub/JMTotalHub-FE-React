import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commentCreateByPostIdAndData from '../../../features/board/comment/actions/CommentCreateAction';
import { commentCreateSliceResetState } from '../../../features/board/comment/slices/CommentCreateSlice';
import CommentFormComponent from './CommentFormComponent';

const CommentCreateComponent = ({ postId }) => {
  const { status, error } = useSelector((state) => state.commentCreate);

  const dispatch = useDispatch();

  if (status === 'succeeded') {
    dispatch(commentCreateSliceResetState());
  }

  const submitHandler = useCallback(
    ({ content }) => {
      dispatch(
        commentCreateByPostIdAndData({
          postId,
          bodyData: { content },
        })
      );
    },
    [dispatch, postId]
  );

  return (
    <div>
      <h3>댓글작성 컴포넌트</h3>
      <CommentFormComponent
        onSubmit={submitHandler}
        status={status}
        error={error}
      />
    </div>
  );
};

export default CommentCreateComponent;
