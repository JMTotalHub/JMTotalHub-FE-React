import React from 'react';
import QuillEditor from '../../common/QuillEditor';

const PostFormComponent = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
  status,
  error,
}) => {
  if (status === 'loading') {
    return <div>Loading... 데이터를 저장하고 있습니다.</div>;
  }

  if (status === 'failed') {
    console.log('api 통신 에러 : ' + error);
    return <div>Error: 게시글 데이터를 저장하지 못했습니다.</div>;
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>제목:</label>
        <input type="text" value={title} onChange={onTitleChange} />
      </div>
      <QuillEditor value={content} onChange={onContentChange} />
      <button type="submit">저장</button>
    </form>
  );
};

export default PostFormComponent;
