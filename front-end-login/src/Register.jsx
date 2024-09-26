// src/Register.js
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Register({ handleLogin }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/register",
            values
          );

          // Automatically log in the user after registration
          handleLogin(response.data.token, response.data.role);
          navigate("/"); // Redirect to home page after successful registration
        } catch (error) {
          if (error.response) {
            setErrorMessage(
              error.response.data.message || "An error occurred."
            );
          } else {
            setErrorMessage("Network error. Please try again.");
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form custom-form">
          <div className="form-control">
            <Field type="text" name="name" placeholder="Name" required />
            <label htmlFor="name">Name</label>
            <ErrorMessage name="name" component="div" />
          </div>
          <div className="form-control">
            <Field type="email" name="email" placeholder="Email" required />
            <label htmlFor="email">Email</label>
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="form-control">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              minLength="6"
              required
            />
            <label htmlFor="password">Password</label>
            <ErrorMessage name="password" component="div" />
          </div>
          <div className="form-control">
            <Field
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              minLength="6"
              required
            />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <ErrorMessage name="password_confirmation" component="div" />
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button className="btn-submit" type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
