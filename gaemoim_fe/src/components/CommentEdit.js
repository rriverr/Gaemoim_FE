import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators3 } from "../redux/modules/comments";
import { useState } from "react";





const CommentEdit = (props) => {
  const dispatch = useDispatch();
  const contentref = useRef();

  // const editingComment = useSelector((state) => state.comment.editingComment);
  const editingComment = useSelector( (state) => state.comment?.editingComment );
  console.log("댓글.....................",editingComment)

  const editBtnClick = () => {
    const content = contentref.current.value;
    dispatch(
      actionCreators3.editCommentDB(
        editingComment.username,
        editingComment.nickName,
        content,
        editingComment.commentId
      )
    );
    props.setEditing(false);
  };
  return (
    <Container>
      <div>
        <span>{editingComment?.nickName}</span>
        <input
          defaultValue={editingComment?.comment_content}
          ref={contentref}
        ></input>
      </div>
      <div>
        <button onClick={editBtnClick}>수정하기</button>
        <button onClick={() => props.setEditing(false)}>닫기</button>
      </div>
    </Container>
  );
};
const Container = styled.div`
  border: 3px solid #e6d5b8;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  margin: auto;
  padding: 10px 20px;
  div {
    &:first-child {
      display: flex;
      align-items: center;
      span {
        margin-right: 20px;
        font-size: 16px;
        font-weight: 700;
      }
      input {
        border-radius: 30px;
        font-size: 16px;
        padding: 5px 20px;
      }
    }
    &:last-child {
      button {
        background-color: #e6d5b8;
        border: none;
        border-radius: 9999px;
        padding: 5px 9px;
        color: white;
        transition: 0.2s;
        &:hover {
          background-color: #fa9b27;
        }
      }
    }
  }
`;

export default CommentEdit;
