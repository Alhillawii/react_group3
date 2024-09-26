// src/Home.js
import React from "react";

export default function Home({ isAuthenticated }) {
  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in or register.</h2>
      )}
    </div>
  );
}
