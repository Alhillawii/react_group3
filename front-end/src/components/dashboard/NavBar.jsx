import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router

function NavBar() {
    return (
        <div className="main-header">
            <div className="main-header-logo">
                {/* Logo Header */}
                <div className="logo-header" data-background-color="dark">
                    <a href="index.html" className="logo">
                        <img
                            src="assets/img/kaiadmin/logo_light.svg"
                            alt="navbar brand"
                            className="navbar-brand"
                            height={20}
                        />
                    </a>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="gg-menu-right" />
                        </button>
                        <button className="btn btn-toggle sidenav-toggler">
                            <i className="gg-menu-left" />
                        </button>
                    </div>
                    <button className="topbar-toggler more">
                        <i className="gg-more-vertical-alt" />
                    </button>
                </div>
                {/* End Logo Header */}
            </div>
            {/* Navbar Header */}
            <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link 
                                            className="dropdown-item" 
                                            to="/admin/adminprof" 
                                            onClick={(e) => {
                                                window.scrollTo(0, 0); // Scroll to the top when navigating
                                            }}
                                        >
                                            Admin Profile
                                        </Link>
                                    </li>
                                    <li>
    <Link 
        className="dropdown-item" 
        to="/logout" 
        onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.scrollTo(0, 0); // Ensure the window doesn't scroll when navigating
        }}
    >
        <i className="fas fa-sign-out-alt"></i> {/* Font Awesome Logout Icon */}
        Logout
    </Link>
</li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar */}
        </div>
    );
}

export default NavBar;
