// src/Nav.js
import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ isAuthenticated, userRole, handleLogout }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuthenticated ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          {userRole === "admin" && <Link to="/dashboard">Dashboard</Link>}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
