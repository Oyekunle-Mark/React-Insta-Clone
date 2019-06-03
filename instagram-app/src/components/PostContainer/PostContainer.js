import React from "react";
import Props from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./PostConatainer.css";

export default function PostContainer({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments
}) {
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

      <CommentSection time={timestamp} postComments={comments} />
    </div>
  );
}

PostContainer.propTypes = {
  username: Props.string.isRequired,
  thumbnailUrl: Props.string.isRequired,
  imageUrl: Props.string.isRequired,
  likes: Props.number.isRequired,
  timestamp: Props.string.isRequired,
  comments: Props.arrayOf(Props.object).isRequired
};
