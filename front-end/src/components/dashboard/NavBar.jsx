function NavBar() {
    return (<div className="main-header">
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
                    <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
                        <li className="nav-item topbar-user dropdown hidden-caret">
                            <div className="dropdown">
                                <button
                                    className="btn  dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Admin name <span className="caret" />
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="dropdown-menu dropdown-user animated fadeIn">
                                <div className="dropdown-user-scroll scrollbar-outer">
                                    <li>
                                        <div className="user-box">
                                            <div className="avatar-lg">
                                                <img
                                                    src="assets/img/profile.jpg"
                                                    alt="image profile"
                                                    className="avatar-img rounded"
                                                />
                                            </div>
                                            <div className="u-text">
                                                <h4>Hizrian</h4>
                                                <p className="text-muted">hello@example.com</p>
                                                <a
                                                    href="profile.html"
                                                    className="btn btn-xs btn-secondary btn-sm"
                                                >
                                                    View Profile
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            My Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            My Balance
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Inbox
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Account Setting
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Logout
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </div>
    );
}

export default NavBar;