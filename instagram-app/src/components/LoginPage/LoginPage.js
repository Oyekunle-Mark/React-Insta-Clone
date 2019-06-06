import React, { createRef } from "react";
import styled from "styled-components";

const StyledLoginPage = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 360px;
  background: white;
  border: 1px solid rgb(211, 209, 209);
  border-radius: 3px;
  margin-top: 14%;

  h2 {
    font-size: 35px;
    font-family: "Satisfy", cursive;
    margin-bottom: 20px;
  }
  
  hr {
    width: 80%;
    margin-bottom: 20px;
  }

  input {
    width: 78%;
    height: 35px;
    border: 1px solid rgb(211, 209, 209);
    border-radius: 3px;
    background: rgb(250, 249, 249);
    font-size: 12px;
    padding: 0 5px;
    margin: 10px 0;
  }

  input:focus {
    outline: none;
    border: 2px solid rgb(179, 177, 177);
    color: rgb(49, 47, 47);
  }

  button {
    width: 81.5%;
    height: 30px;
    border-radius: 3px;
    color: white;
    border-color: rgb(56, 151, 240);
    background: rgb(56, 151, 240);
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  button:hover {
    cursor: pointer;
    background: rgba(56, 151, 240, 0.856);
    border-color: rgba(56, 151, 240, 0.856);
    transition: 0.3s;
  }

  button:focus {
    outline: none;
    transform: translateY(2px);
    transition: 0.1s;
  }
`;

export default function LoginPage() {
  const textInput = createRef();

  const login = () => {
    localStorage.instagramCloneUsername = textInput.current.value;
  };

  return (
    <StyledLoginPage onSubmit={login}>
      <h2>Instagram</h2>
      <hr />

      <input type="text" placeholder="Username" ref={textInput} />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </StyledLoginPage>
  );
}
