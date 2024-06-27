import React, { useState } from 'react';
import PostFormComponent from './PostFormComponent';
import postCreateByBoardIdAndData from '../../../features/board/post/actions/PostCreateAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostCreateComponent = () => {
  const { boardId } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { status, error } = useSelector((state) => state.postCreate);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(
      postCreateByBoardIdAndData({
        boardId,
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

export default PostCreateComponent;
