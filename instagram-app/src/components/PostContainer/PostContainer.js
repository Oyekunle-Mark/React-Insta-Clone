import React from "react";
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
      <img src={imageUrl} alt='post-imgae' />
      <div className="icons" />
      <p>{likes} likes</p>

      <CommentSection time={timestamp} postComments={comments} />
    </div>
  );
}
