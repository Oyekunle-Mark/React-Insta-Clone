import React, { useState } from "react";
import data from "./dummy-data";
import SeachBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

function App() {
  const [posts, updatePosts] = useState(data);
  const [comment, updateComment] = useState("");

  const commentHandler = (id, e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      username: "user",
      text: comment
    };

    const newState = Object.assign(posts, {});

    updatePosts(
      newState.map(post => {
        if (post.id === id) post.comments.push(newComment);
        return post;
      })
    );
    updateComment('');
  };

  const commentInputHandler = event => {
    updateComment(event.target.value);
  };

  const postContainers = posts.map(post => (
    <PostContainer
      key={post.id}
      {...post}
      defaultComment={comment}
      inputHandler={commentInputHandler}
      addInput={commentHandler}
    />
  ));

  return (
    <div className="App">
      <SeachBar />
      {postContainers}
    </div>
  );
}

export default App;
