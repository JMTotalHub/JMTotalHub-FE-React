import React from 'react';
import { htmlDecoder } from '../../../utils/htmlDecoder';

import { TableCell } from './styles/CommentListStyles';

const CommentDetailsComponent = ({
  commentId,
  commentContent,
  commentCreatedAt,
}) => {
  const decodedContent = htmlDecoder(commentContent);

  return (
    <>
      <TableCell>{commentId}</TableCell>
      <TableCell
        dangerouslySetInnerHTML={{ __html: decodedContent }}
      ></TableCell>
      <TableCell>{new Date(commentCreatedAt).toLocaleString()}</TableCell>
    </>
  );
};

export default CommentDetailsComponent;
