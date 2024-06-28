import React, { useEffect, useState } from 'react';
import QuillEditor from '../../common/QuillEditor';

const PostFormComponent = ({
  inItContent = '',
  // onTitleChange,
  // onContentChange,
  onSubmit,
  status,
  error,
}) => {
  const [content, setContent] = useState(inItContent);

  useEffect(() => {
    setContent(inItContent);
  }, [inItContent]);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content });
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
      <h3>폼 부분</h3>
      <form onSubmit={handleSubmit}>
        <QuillEditor value={content} onChange={handleContentChange} />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default PostFormComponent;
