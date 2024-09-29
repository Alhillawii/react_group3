import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavLand() {
    const [showServices, setShowServices] = useState(true);

    // Handle the click to toggle the dropdown
    const handleServicesClick = () => {
        setShowServices(prevState => !prevState);
    };

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
                <div className="collapse navbar-collapse" id="navbarCollapse" >
                    <div className="navbar-nav ms-auto p-4 p-lg-0" >
                        <Link to="/" className="nav-item nav-link" >
                            Home
                        </Link>
                        <Link to="/about" className="nav-item nav-link">
                            About
                        </Link>
                        <Link to="/courses" className="nav-item nav-link">
                            Courses
                        </Link>
                         {/* Services Dropdown */}
                        <div className={ `d-flex align-items-center nav-item dropdown ${showServices ? "show" : ""}`}>
                            <Link
                                className=" nav-item nav-link  dropdown-toggle"
                                onClick={handleServicesClick} // Toggle dropdown on click
                                role="button"
                                aria-expanded={showServices ? "true" : "false"}
                                aria-haspopup="true"
                                style={{  color:'gray' , fontSize:'1.1rem' }}
                                
                            >
                                Services
                            </Link>
                            <div className={`dropdown-menu ${showServices ? "show" : ""}`}>
                                <Link to="/services" className="dropdown-item">
                                    View Accreditation
                                </Link>
                                <Link to="/amenities" className="dropdown-item">
                                    View Amenities
                                </Link>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">
                            Contact
                        </Link>
                    </div>
                    <Link to="/login" className="btn py-4 px-lg-5 d-none d-lg-block pt-4" style={{ backgroundColor: '#06BBCC' , color: 'white' ,  fontSize:'1.1rem' }}>
    Login <i className="fa fa-arrow-right ms-3" />
</Link>

                </div>
            </nav>
        </div>
    );
}
