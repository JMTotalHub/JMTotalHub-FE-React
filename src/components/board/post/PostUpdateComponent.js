import React, { useCallback, useEffect, useState } from 'react';
import postUpdateInitByPostId from '../../../features/board/post/actions/PostUpdateInitAction';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import postUpdateByPostIdAndData from '../../../features/board/post/actions/PostUpdateAction';
import PostFormComponent from './PostFormComponent';
import { htmlDecoder } from '../../../utils/htmlDecoder';

const PostUpdateComponent = ({ postId }) => {
  const [inItTitle, setInItTitle] = useState('');
  const [inItContent, setInItContent] = useState('');
  const { postDetails, status, error } = useSelector(
    (state) => state.postUpdate
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      postUpdateInitByPostId({
        postId,
      })
    );
  }, []);

  useEffect(() => {
    if (postDetails) {
      setInItTitle(postDetails.title);
      const decodedContent = htmlDecoder(postDetails.content || '');
      setInItContent(decodedContent);
    }
  }, [postDetails]);

  const submitHandler = useCallback(
    ({ title, content }) => {
      dispatch(
        postUpdateByPostIdAndData({
          postId,
          bodyData: { title, content },
        })
      );
    },
    [dispatch, postId]
  );

  return (
    <div>
      <h3>수정 컴포넌트</h3>
      <PostFormComponent
        inItTitle={inItTitle}
        inItContent={inItContent}
        onSubmit={submitHandler}
        status={status}
        error={error}
      />
    </div>
  );
};

export default PostUpdateComponent;
