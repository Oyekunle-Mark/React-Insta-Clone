import React from "react";
import data from "./dummy-data";
import SeachBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

function App() {
  const postContainers = data.map(post => (
    <PostContainer key={post.id} {...post} />
  ));
  return (
    <div className="App">
      <SeachBar />
      {postContainers}
    </div>
  );
}

export default App;
