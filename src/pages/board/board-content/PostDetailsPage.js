import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import CommentListComponent from '../../../components/board/comment/CommentListComponent';
import PostDetailsComponent from '../../../components/board/post/PostDetailsComponent';
import { useSelector } from 'react-redux';
import PostDeleteButtonComponent from '../../../components/board/post/PostDeleteButtonComponent';
import CommentCreateComponent from '../../../components/board/comment/CommentCreateComponent';

import {
  BoardButton,
  ButtonContainer,
  LeftButtonGroup,
  RightButtonGroup,
} from '../../../styles/commonButtonStyles';

const PostDetailsPage = () => {
  const { boardId, postId } = useParams();
  const { pageNum } = useSelector((state) => state.postList);

  console.log('pageNum : ' + pageNum);

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('edit');
  };

  const handleListClick = () => {
    navigate(`/boards/${boardId}/posts?page=${pageNum}`);
  };

  return (
    <>
      <PostDetailsComponent postId={postId}></PostDetailsComponent>
      <ButtonContainer>
        <LeftButtonGroup>
          <BoardButton onClick={handleListClick}>목록</BoardButton>
        </LeftButtonGroup>
        <RightButtonGroup>
          <BoardButton onClick={handleEditClick}>글 수정</BoardButton>
          <PostDeleteButtonComponent
            boardId={boardId}
            postId={postId}
            pageNum={pageNum}
          />
        </RightButtonGroup>
      </ButtonContainer>

      <CommentCreateComponent postId={postId}></CommentCreateComponent>
      <CommentListComponent postId={postId}></CommentListComponent>
    </>
  );
};

export default PostDetailsPage;
