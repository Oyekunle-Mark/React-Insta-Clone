import React from "react";

export default function LoginPage() {
  const login = e => {
    e.preventDefault();
    const username = document.querySelector(".usernameInput").value;

    localStorage.instagramCloneUsername = username;
    window.location.reload();
  };

  return (
    <form onSubmit={login}>
      <input className="usernameInput" type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
