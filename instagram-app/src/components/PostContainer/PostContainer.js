import React from "react";
import Props from "prop-types";
import styled from "styled-components";
import CommentSection from "../CommentSection/CommentSection";
import StyledUsername from "../Styles/StyledUsername";

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 614px;
  border: 1px solid rgb(211, 209, 209);
  margin-bottom: 60px;
  border-radius: 3px;
  background: white;

  .post-header {
    height: 22px;
    padding: 16px;
    display: flex;
    align-items: center;
  }

  .icons {
    padding: 0 5px;
  }

  .icons img {
    width: 15px;
    height: 15px;
    margin: 5px;
  }

  .icons img:hover {
    cursor: pointer;
  }

  .icons img:active {
    transform: scale(1.3);
  }

  .icons img:nth-of-type(2) {
    transform: rotateY(180deg);
  }

  p {
    margin: 7px 0;
    padding-left: 10px;
  }

  .likes {
    font-size: 14px;
    font-weight: 600;
    color: rgb(37, 35, 35);
  }
`;

const StyledThumbnail = styled.div`
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export default function PostContainer({
  id,
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments,
  likeHandler,
  liked
}) {
  const imageSource = liked
    ? "https://image.flaticon.com/icons/svg/148/148836.svg"
    : "https://image.flaticon.com/icons/svg/149/149217.svg";

  return (
    <StyledPostContainer>
      <div className="post-header">
        <StyledThumbnail>
          <img src={thumbnailUrl} alt="user-icon" />
        </StyledThumbnail>
        <StyledUsername>{username}</StyledUsername>
      </div>

      <img src={imageUrl} alt="post-imgae" />

      <div className="icons">
        <img
          src={imageSource}
          alt="like"
          onClick={() => likeHandler(id)}
        />
        <img
          src="https://img.icons8.com/ios/50/000000/speech-bubble.png"
          alt="comment"
        />
      </div>

      <p className="likes">{likes} likes</p>

      <CommentSection time={timestamp} postComments={comments} id={id} />
    </StyledPostContainer>
  );
}

PostContainer.propTypes = {
  id: Props.string.isRequired,
  username: Props.string.isRequired,
  thumbnailUrl: Props.string.isRequired,
  imageUrl: Props.string.isRequired,
  likes: Props.number.isRequired,
  timestamp: Props.string.isRequired,
  comments: Props.arrayOf(Props.object).isRequired,
  likeHandler: Props.func.isRequired,
  liked: Props.bool.isRequired
};
