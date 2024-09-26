import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, role, requiredRole }) {
  if (!localStorage.getItem("token") || role !== requiredRole) {
    return <Navigate to="/" />;
  }
  return element;
}
