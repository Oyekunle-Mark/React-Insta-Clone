import React from "react";
import Props from "prop-types";
import Fuse from "fuse.js";
import SeachBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

export default function PostsPage({
  posts,
  searchInput,
  searchInputChange,
  likeComment
}) {
  const options = {
    keys: ["username"]
  };

  // eslint-disable-next-line
  const postContainers = posts.map(post => {
    if (
      !!new Fuse([post], options).search(searchInput).length ||
      searchInput.trim() === ""
    ) {
      return (
        <PostContainer key={post.id} {...post} likeHandler={likeComment} />
      );
    }
  });

  return (
    <>
      <SeachBar searchValue={searchInput} inputChange={searchInputChange} />

      {postContainers}
    </>
  );
}

PostsPage.propTypes = {
  posts: Props.arrayOf(Props.object).isRequired,
  searchInput: Props.string.isRequired,
  searchInputChange: Props.func.isRequired,
  likeComment: Props.func.isRequired
};
