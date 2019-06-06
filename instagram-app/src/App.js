import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import "./App.css";

export default function App() {
  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
}
