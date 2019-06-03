import React from "react";
import Props from "prop-types";
import Comment from "../Comment/Comment";

export default function CommentSection({ time, postComments }) {
  const comments = postComments.map(comment => (
    <Comment key={comment.id} {...comment} />
  ));
  return (
    <div className="comment-section">
      {comments}

      <p>{time}</p>
      <textarea />
    </div>
  );
}

CommentSection.propTypes = {
  time: Props.string.isRequired,
  postComments: Props.arrayOf(Props.object).isRequired
};
