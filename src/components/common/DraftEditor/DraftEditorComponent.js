import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import postCreateByBoardIdAndData from '../../../features/board/post/actions/PostCreateAction';

const DraftEditorComponent = () => {
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
    try {
      const response = await axios.post('http://localhost:3000/posts', {
        content: rawContent,
      });
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default DraftEditorComponent;
