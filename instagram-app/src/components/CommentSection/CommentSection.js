import React, { useState } from "react";
import Props from "prop-types";
import { v4 } from "uuid";
import moment from "moment";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

export default function CommentSection({ time, postComments }) {
  const [comment, updateComment] = useState("");

  const commentInputHandler = event => {
    updateComment(event.target.value);
  };

  const addNewComment = e => {
    e.preventDefault();
    const newComment = {
      id: v4(),
      username: "codeMage",
      text: comment
    };

    postComments.push(newComment);
    updateComment("");
  };

  const comments = postComments.map(singleComment => (
    <Comment key={singleComment.id} {...singleComment} />
  ));

  const newDate = time.replace(/th/, "");

  return (
    <div className="comment-section">
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
    </div>
  );
}

CommentSection.propTypes = {
  time: Props.string.isRequired,
  postComments: Props.arrayOf(Props.object).isRequired
};
