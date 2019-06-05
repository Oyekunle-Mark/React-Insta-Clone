import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const login = e => {
    e.preventDefault();
    const username = document.querySelector(".usernameInput").value;

    localStorage.instagramCloneUsername = username;
    window.location.reload();
  };

  return (
    <form className="login-page" onSubmit={login}>
      <h2>Instagram</h2>
      <hr />

      <input className="usernameInput" type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
