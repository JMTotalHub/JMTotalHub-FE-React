import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EditorState, convertToRaw } from 'draft-js';
import postCreateByBoardIdAndData from '../../../features/board/post/actions/PostCreateAction';
import DraftEditorComponent from '../../common/DraftEditor/DraftEditorComponent';

const PostCreateComponent = () => {
  const { boardId } = useParams();

  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const { postDetails, status, error } = useSelector(
    (state) => state.postCreate
  );

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const jsonContent = JSON.stringify(rawContent);

    if (!rawContent || !title) {
      console.error('Title or content is empty');
      return;
    }

    console.log(editorState);
    console.log(title);
    console.log(contentState);
    console.log(rawContent);
    console.log(jsonContent);

    dispatch(
      postCreateByBoardIdAndData({
        boardId,
        bodyData: { title, content: jsonContent },
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
        <DraftEditorComponent
          editorState={editorState}
          setEditorState={setEditorState}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default PostCreateComponent;
