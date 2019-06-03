import React, { useState } from "react";
import Props from "prop-types";
import { v4 } from "uuid";
import CommentSection from "../CommentSection/CommentSection";
import "./PostConatainer.css";

export default function PostContainer({
  id,
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments
}) {
  const [comment, updateComment] = useState("");

  const commentInputHandler = event => {
    updateComment(event.target.value);
  };

  const commentHandler = e => {
    e.preventDefault();
    const newComment = {
      id: v4(),
      username: "user",
      text: comment
    };

    comments.push(newComment);
    updateComment("");
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img src={thumbnailUrl} alt="user-icon" />
        <span>{username}</span>
      </div>
      <img src={imageUrl} alt="post-imgae" />
      <div className="icons">
        <img src="https://img.icons8.com/ios/50/000000/hearts.png" alt="like" />
        <img
          src="https://img.icons8.com/ios/50/000000/speech-bubble.png"
          alt="comment"
        />
      </div>
      <p className="likes">{likes} likes</p>

      <CommentSection
        time={timestamp}
        postComments={comments}
        commentInput={comment}
        commentHandler={commentInputHandler}
        commentSubmit={commentHandler}
        id={id}
      />
    </div>
  );
}

PostContainer.propTypes = {
  id: Props.string.isRequired,
  username: Props.string.isRequired,
  thumbnailUrl: Props.string.isRequired,
  imageUrl: Props.string.isRequired,
  likes: Props.number.isRequired,
  timestamp: Props.string.isRequired,
  comments: Props.arrayOf(Props.object).isRequired
};
