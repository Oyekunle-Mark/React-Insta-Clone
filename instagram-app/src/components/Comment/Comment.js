import React from "react";
import Props from "prop-types";
import './Comment.css';

export default function Comment({
  id,
  username,
  text,
  removeComment,
  position
}) {
  return (
    <p className="comment">
      <span className="likes">{username}</span> {text}{" "}
      <span className="delete-icon" onClick={() => removeComment(id, position)}>
        X
      </span>
    </p>
  );
}

Comment.propTypes = {
  username: Props.string.isRequired,
  text: Props.string.isRequired,
  id: Props.string.isRequired,
  removeComment: Props.func.isRequired,
  position: Props.number.isRequired
};
