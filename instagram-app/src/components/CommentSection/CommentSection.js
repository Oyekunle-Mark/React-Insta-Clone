import React from "react";
import Props from "prop-types";
import moment from "moment";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

export default function CommentSection({
  time,
  postComments,
  commentInput,
  commentHandler,
  commentSubmit
}) {
  const comments = postComments.map(comment => (
    <Comment key={comment.id} {...comment} />
  ));

  const newDate = time.replace(/th/, "");

  return (
    <div className="comment-section">
      {comments}

      <span className="time">{moment(new Date(newDate)).format("MMM D")}</span>
      <form onSubmit={commentSubmit}>
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
  commentSubmit: Props.func.isRequired
};
