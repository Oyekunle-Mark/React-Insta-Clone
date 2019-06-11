import React from "react";
import styled from "styled-components";
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import withAuthenticate from "./components/authentication/withAuthenticate";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  background: rgb(250, 250, 250);
  min-height: 100vh;
`;

export default function App() {
  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

  return (
    <StyledApp>
      <ComponentFromWithAuthenticate />
    </StyledApp>
  );
}
