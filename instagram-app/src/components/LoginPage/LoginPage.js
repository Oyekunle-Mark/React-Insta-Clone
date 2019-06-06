import React, { createRef } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const textInput = createRef();

  const login = () => {
    localStorage.instagramCloneUsername = textInput.current.value;
  };

  return (
    <form className="login-page" onSubmit={login}>
      <h2>Instagram</h2>
      <hr />

      <input type="text" placeholder="Username" ref={textInput} />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
