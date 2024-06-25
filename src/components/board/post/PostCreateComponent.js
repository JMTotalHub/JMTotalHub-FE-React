import React, { useEffect, useState } from 'react';
import EditorComponent from '../../common/DraftEditor/DraftEditorComponent';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostCreateComponent = () => {
  const { boardId } = useParams();

  const [editorContent, setEditorContent] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editorContent) {
      console.error('Editor content is empty');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/posts', {
        title,
        content: editorContent,
      });

      console.log('Post created:', response.data);

      dispatch(
        postCreateByBoardIdAndData({
          boardId,
          bodyData: { title, content: editorContent },
        })
      );
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  useEffect(() => {
    dispatch(
      postCreateByBoardIdAndData({
        boardId,
        bodyData: { content: editorState },
      })
    );
  });

  return (
    <div>
      <EditorComponent />
    </div>
  );
};

export default PostCreateComponent;
