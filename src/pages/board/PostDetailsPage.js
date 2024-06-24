import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostDetailsByPostId from '../../features/board/actions/post/PostDetailsAction';
import PostDetailsComponent from '../../components/board/PostDetailsComponent';

const PostDetailsPage = () => {
  const { postId } = useParams();

  const dispatch = useDispatch();
  const { postDetails, status, error } = useSelector(
    (state) => state.postDetails
  );

  useEffect(() => {
    console.log('useEffect !!!!!!!!!!!!!!!!!!!!!!');
    dispatch(
      PostDetailsByPostId({
        postId,
      })
    );
  }, []);

  console.log(postDetails);

  // if (!postDetails) {
  //   return null;
  // }

  return (
    <PostDetailsComponent
      postDetails={postDetails}
      status={status}
      error={error}
    ></PostDetailsComponent>
  );
};

export default PostDetailsPage;
