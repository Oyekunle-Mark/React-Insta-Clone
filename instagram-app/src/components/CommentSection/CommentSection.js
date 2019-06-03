import React from "react";
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
