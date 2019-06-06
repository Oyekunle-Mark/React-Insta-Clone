import React, { useState } from "react";
import Props from "prop-types";
import { v4 } from "uuid";
import moment from "moment";
import styled from "styled-components";
import Comment from "../Comment/Comment";

const StyledCommentSection = styled.div`
  input {
    display: block;
    width: 96%;
    height: 60px;
    margin: auto;
    border-top: 1px solid rgb(211, 209, 209);
    border-left: 0;
    border-bottom: 0;
    border-right: 0;
    margin-top: 10px;
    font-size: 16px;
  }

  input:focus {
    outline: none;
    border-top: 2px solid rgb(90, 87, 87);
  }

  .time {
    padding-left: 10px;
    text-transform: uppercase;
    font-size: 10px;
    color: rgb(92, 83, 83);
  }
`;

export default function CommentSection({ time, postComments }) {
  const [comment, updateComment] = useState("");
  const [commentList, updateCommentList] = useState(postComments);

  const commentInputHandler = event => {
    updateComment(event.target.value);
  };

  const addNewComment = e => {
    e.preventDefault();

    if (comment.trim()) {
      const newComment = {
        id: v4(),
        username: localStorage.instagramCloneUsername,
        text: comment
      };

      updateCommentList(commentList.concat(newComment));
      postComments.push(newComment);
      updateComment("");
    }
  };

  const deleteComment = (id, i) => {
    updateCommentList(commentList.filter(comm => comm.id !== id));
    postComments.pop(i);
  };

  const comments = commentList.map((singleComment, i) => (
    <Comment
      key={singleComment.id}
      {...singleComment}
      removeComment={deleteComment}
      position={i}
    />
  ));

  const newDate = time.replace(/th/, "");

  return (
    <StyledCommentSection>
      {comments}

      <span className="time">{moment(new Date(newDate)).format("MMM D")}</span>

      <form onSubmit={addNewComment}>
        <input
          type="text"
          value={comment}
          placeholder="Add a comment..."
          onChange={commentInputHandler}
        />
      </form>
    </StyledCommentSection>
  );
}

CommentSection.propTypes = {
  time: Props.string.isRequired,
  postComments: Props.arrayOf(Props.object).isRequired
};
