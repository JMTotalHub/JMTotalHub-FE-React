import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostDetailsByPostId from '../../features/board/post/actions/PostDetailsAction';
import PostDetailsComponent from '../../components/board/PostDetailsComponent';

const PostDetailsPage = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();
  const { postDetails, status, error } = useSelector(
    (state) => state.postDetails
  );

  useEffect(() => {
    dispatch(
      PostDetailsByPostId({
        postId,
      })
    );
  }, []);

  return (
    <PostDetailsComponent
      postDetails={postDetails}
      status={status}
      error={error}
    ></PostDetailsComponent>
  );
};

export default PostDetailsPage;
