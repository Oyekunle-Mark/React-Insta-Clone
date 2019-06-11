import React from "react";
import Props from "prop-types";
import styled from "styled-components";
import StyledUsername from "../Styles/StyledUsername";

const StyledComment = styled.p`
  font-size: 14px;
  color: rgb(37, 35, 35);

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
      <StyledUsername comment>{username}</StyledUsername> {text}
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
