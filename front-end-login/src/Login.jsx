// src/Login.js
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/login",
            values
          );

          // Use handleLogin to update state
          handleLogin(response.data.token, response.data.role);
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
            <Field type="email" name="email" placeholder="Email" required />
            <label htmlFor="email">Email</label>
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="form-control">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength="6"
            />
            <label htmlFor="password">Password</label>
            <ErrorMessage name="password" component="div" />
          </div>
          {errorMessage && <div className="error">{errorMessage}</div>}
          <button className="btn-submit" type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}
