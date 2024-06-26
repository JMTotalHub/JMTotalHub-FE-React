import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import postCreateByBoardIdAndData from '../../../features/board/post/actions/PostCreateAction';
import QuillEditor from '../../common/QuillEditor';

const PostCreateComponent = () => {
  const { boardId } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { postDetails, status, error } = useSelector(
    (state) => state.postCreate
  );

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content || !title) {
      console.error('Title or content is empty');
      return;
    }

    console.log(title);
    console.log(content);

    dispatch(
      postCreateByBoardIdAndData({
        boardId,
        bodyData: { title: title, content: content },
      })
    );
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
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <QuillEditor value={content} onChange={setContent} />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default PostCreateComponent;
