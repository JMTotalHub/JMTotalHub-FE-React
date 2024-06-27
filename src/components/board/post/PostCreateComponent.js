import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import postCreateByBoardIdAndData from '../../../features/board/post/actions/PostCreateAction';
import PostFormComponent from './PostFormComponent';
import { postCreateSliceResetState } from '../../../features/board/post/slices/postCreateSlice';

const PostCreateComponent = ({ boardId, pageNum }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { status, error } = useSelector((state) => state.postCreate);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (status === 'succeeded') {
    dispatch(postCreateSliceResetState());
    navigate(`/boards/${boardId}/posts?page=${pageNum}`);
  }

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        postCreateByBoardIdAndData({
          boardId,
          bodyData: { title, content },
        })
      );
    },
    [title, content]
  );

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);

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
