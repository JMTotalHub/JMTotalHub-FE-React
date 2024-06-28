import React from 'react';

const CommentDetailsComponent = ({
  commentId,
  commentContent,
  commentCreatedAt,
}) => {
  return (
    <tr key={commentId}>
      <td>{commentId}</td>
      <td>{commentContent}</td>
      <td>{new Date(commentCreatedAt).toLocaleString()}</td>
    </tr>
  );
};

export default CommentDetailsComponent;
