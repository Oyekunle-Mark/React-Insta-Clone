import React from "react";
import Props from "prop-types";
import styled from "styled-components";

const StyledComment = styled.p`
  .delete-icon {
    float: right;
    margin-right: 10px;
    color: rgb(211, 209, 209);
    height: 16px;
    width: 16px;
    opacity: 0.1;
  }

  .delete-icon:hover {
    cursor: pointer;
    opacity: 1;
    transition: 0.3s;
    transform: scale(1.4);
  }
`;

export default function Comment({
  id,
  username,
  text,
  removeComment,
  position
}) {
  return (
    <StyledComment>
      <span className="likes">{username}</span> {text}
      <img
        src="https://img.icons8.com/pastel-glyph/64/000000/cancel.png"
        alt="delete"
        className="delete-icon"
        onClick={() => removeComment(id, position)}
      />
    </StyledComment>
  );
}

Comment.propTypes = {
  username: Props.string.isRequired,
  text: Props.string.isRequired,
  id: Props.string.isRequired,
  removeComment: Props.func.isRequired,
  position: Props.number.isRequired
};
