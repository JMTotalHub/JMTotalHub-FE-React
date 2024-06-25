import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import postDetailsByPostId from '../../../features/board/post/actions/PostDetailsAction';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

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

  let editorState;
  try {
    console.log('postDetails.content:', postDetails.content);
    const contentState = convertFromRaw(JSON.parse(postDetails.content));
    editorState = EditorState.createWithContent(contentState);
  } catch (error) {
    console.error('Failed to parse content:', error);
    return <div>Error: 게시글 내용을 불러오는데 실패했습니다.</div>;
  }

  return (
    // <div>
    //   <p>{postDetails.title}</p>
    //   <p>{postDetails.content}</p>
    // </div>
    <div>
      <h1>{postDetails.title}</h1>
      <Editor editorState={editorState} readOnly toolbarHidden />
    </div>
  );
};

export default PostDetailsComponent;
