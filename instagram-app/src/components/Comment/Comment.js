import React from "react";
import Props from "prop-types";

export default function Comment({ username, text }) {
  return (
    <p className="comment">
      <span className="likes">{username}</span> {text}
    </p>
  );
}

Comment.propTypes = {
  username: Props.string.isRequired,
  text: Props.string.isRequired
};
