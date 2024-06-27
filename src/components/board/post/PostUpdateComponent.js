import React, { useEffect, useState } from 'react';
import postUpdateInitByPostId from '../../../features/board/post/actions/PostUpdateInitAction';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import postUpdateByPostIdAndData from '../../../features/board/post/actions/PostUpdateAction';
import PostFormComponent from './PostFormComponent';
import { htmlDecoder } from '../../../utils/htmlDecoder';

const PostUpdateComponent = () => {
  const { postId } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
      setTitle(postDetails.title);
      const decodedContent = htmlDecoder(postDetails.content || '');
      setContent(decodedContent);
    }
  }, [postDetails]);

  const submitHandler = (e) => {
    dispatch(
      postUpdateByPostIdAndData({
        postId,
        bodyData: { title, content },
      })
    );
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <PostFormComponent
        title={title}
        content={content}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
        onSubmit={submitHandler}
        status={status}
        error={error}
      />
    </div>
  );
};

export default PostUpdateComponent;
