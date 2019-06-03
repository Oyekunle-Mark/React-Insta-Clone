import React from 'react';

export default function Comment({ username, text }) {
  return (
    <p className="comment"><span>{username}</span> {text}</p>
  )
}