import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <img
            src="https://www.ittihad.edu.jo/wp-content/uploads/2022/09/ittihad-logo.png"
            alt="Logo"
            style={{ width: '150px', height: 'auto', marginBottom: '0.1rem' }}
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/courses" className="nav-item nav-link">
              Courses
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link to="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
            Login <i className="fa fa-arrow-right ms-3" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
