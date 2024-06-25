import React, { useState, useEffect } from 'react';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import toolbarOptions from './ToolbarOptions';
import '../styles/Editor.css';

const initialContent = '<p>Hello, world!</p>';

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [loadedContent, setLoadedContent] = useState('');

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(initialContent);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
    setLoadedContent(initialContent);
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const saveContent = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawContentState);
    setLoadedContent(markup);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        toolbar={toolbarOptions}
      />
      <button onClick={saveContent}>저장</button>
      <div>
        <h2>저장된 내용</h2>
        <div dangerouslySetInnerHTML={{ __html: loadedContent }} />
      </div>
    </div>
  );
};

export default MyEditor;
