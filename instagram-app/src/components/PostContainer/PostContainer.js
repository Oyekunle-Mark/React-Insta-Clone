import React from "react";
import Props from "prop-types";
import CommentSection from "../CommentSection/CommentSection";

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
      <h4>
        <img src={thumbnailUrl} alt="user-icon" />
        <span>{username}</span>
      </h4>
      <img src={imageUrl} alt="post-imgae" />
      <div className="icons" />
      <p>{likes} likes</p>

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
