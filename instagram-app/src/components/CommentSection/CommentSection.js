import React from "react";
import Props from "prop-types";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

export default function CommentSection({
  time,
  postComments,
  commentInput,
  commentHandler,
  commentSubmit,
  id
}) {
  const comments = postComments.map(comment => (
    <Comment key={comment.id} {...comment} />
  ));
  return (
    <div className="comment-section">
      {comments}

      <span className="time">{time}</span>
      <form onSubmit={e => commentSubmit(id, e)}>
        <input
          type="text"
          value={commentInput}
          placeholder="Add a comment..."
          onChange={commentHandler}
        />
      </form>
    </div>
  );
}

CommentSection.propTypes = {
  time: Props.string.isRequired,
  postComments: Props.arrayOf(Props.object).isRequired,
  commentInput: Props.string.isRequired,
  commentHandler: Props.func.isRequired,
  commentSubmit: Props.func.isRequired,
  id: Props.string.isRequired
};
