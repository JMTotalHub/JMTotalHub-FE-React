import React from 'react';
import { htmlDecoder } from '../../../utils/htmlDecoder';

const CommentDetailsComponent = ({
  commentId,
  commentContent,
  commentCreatedAt,
}) => {
  const decodedContent = htmlDecoder(commentContent);

  return (
    <tr key={commentId}>
      <td>{commentId}</td>
      <td dangerouslySetInnerHTML={{ __html: decodedContent }}></td>
      <td>{new Date(commentCreatedAt).toLocaleString()}</td>
    </tr>
  );
};

export default CommentDetailsComponent;
