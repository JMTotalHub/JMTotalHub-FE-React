import React from 'react';
import { htmlDecoder } from '../../../utils/htmlDecoder';

const CommentDetailsComponent = ({
  commentId,
  commentContent,
  commentCreatedAt,
}) => {
  const decodedContent = htmlDecoder(commentContent);

  return (
    <>
      <td>{commentId}</td>
      <td dangerouslySetInnerHTML={{ __html: decodedContent }}></td>
      <td>{new Date(commentCreatedAt).toLocaleString()}</td>
    </>
  );
};

export default CommentDetailsComponent;
