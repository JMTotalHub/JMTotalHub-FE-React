import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import postDetailsByPostId from '../../../features/board/post/actions/PostDetailsAction';

const PostDetailsComponent = ({ postId }) => {
  const dispatch = useDispatch();

  const { postDetails, status, error } = useSelector(
    (state) => state.postDetails
  );

  useEffect(() => {
    dispatch(
      postDetailsByPostId({
        postId,
      })
    );
  }, []);

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
      <p>{postDetails.title}</p>
      <p>{postDetails.content}</p>
    </div>
  );
};

export default PostDetailsComponent;
