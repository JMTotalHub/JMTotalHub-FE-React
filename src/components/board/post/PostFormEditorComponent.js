import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import postCreateByBoardIdAndData from '../../../features/board/post/actions/PostCreateAction';
import QuillEditor from '../../common/QuillEditor';
import postUpdateByPostIdAndData from '../../../features/board/post/actions/PostUpdateAction';
import postUpdateInitByPostId from '../../../features/board/post/actions/PostUpdateInitAction';
import { htmlDecoder } from '../../../utils/htmlDecoder';

// 게시글 생성, 수정을 같이 처리
const PostFormEditorComponent = ({ mode }) => {
  const { boardId, postId } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const postCreateState = useSelector((state) => state.postCreate);
  const postUpdateState = useSelector((state) => state.postUpdate);

  let postDetails, status, error;
  if (mode === 'create') {
    postDetails = postCreateState.postDetails;
    status = postCreateState.status;
    error = postCreateState.error;
  } else if (mode === 'edit') {
    postDetails = postUpdateState.postDetails;
    status = postUpdateState.status;
    error = postUpdateState.error;
  } else {
    console.log('작성 폼 mode가 정해지지 않았습니다');
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === 'edit') {
      console.log(postId);
      dispatch(postUpdateInitByPostId({ postId }));
    }
  }, []);

  useEffect(() => {
    if (mode === 'edit' && postDetails) {
      setTitle(postDetails.title || '');
      const decodedContent = htmlDecoder(postDetails.content || '');
      setContent(decodedContent);
    }
  }, [postDetails]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      console.error('Title is empty');
      return;
    } else if (!content) {
      console.error('Content is empty');
      return;
    }
    if (mode === 'edit') {
      dispatch(
        postUpdateByPostIdAndData({
          postId,
          bodyData: { title: title, content: content },
        })
      );
    } else {
      dispatch(
        postCreateByBoardIdAndData({
          boardId,
          bodyData: { title: title, content: content },
        })
      );
    }
  };

  if (status === 'loading') {
    return <div>Loading... 데이터를 저장하고 있습니다.</div>;
  }

  if (status === 'failed') {
    console.log('api 통신 에러 : ' + error);
    return <div>Error: 게시글 데이터를 저장하지 못했습니다.</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <QuillEditor value={content} onChange={handleContentChange} />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default PostFormEditorComponent;
