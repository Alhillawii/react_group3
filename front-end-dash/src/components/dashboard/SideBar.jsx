import { Link } from "react-router-dom";
function SideBar() {
    return (

        <div className="sidebar" data-background-color="dark">
            <div className="sidebar-logo">
                {/* Logo Header */}
                <div className="logo-header" data-background-color="dark">
                    <Link to="/" className="logo">
                        <img
                            src="public/img/kaiadmin/logo_light.svg"
                            alt="navbar brand"
                            className="navbar-brand"
                            height={20}
                        />
                    </Link>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="gg-menu-right"/>
                        </button>
                        <button className="btn btn-toggle sidenav-toggler">
                            <i className="gg-menu-left"/>
                        </button>
                    </div>
                    <button className="topbar-toggler more">
                        <i className="gg-more-vertical-alt"/>
                    </button>
                </div>
                {/* End Logo Header */}
            </div>
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">

                    <ul className="nav nav-secondary">
                        <li className="nav-item active">
                            <Link to="/"


                                className="collapsed"
                                aria-expanded="false"
                            >
                                <i className="fas fa-home"/>
                                <p>Dashboard</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/teachers"
                                className="collapsed"
                                aria-expanded="false"
                            >
                                <i className="fas fa-home"/>
                                <p>Teachers</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/students"
                                className="collapsed"
                                aria-expanded="false"
                            >
                                <i className="fas fa-home"/>
                                <p>students</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>

                        <li className="nav-item">
                            <Link

                                to="/messages"
                                className="collapsed"
                                aria-expanded="false"
                            >
                                <i className="fas fa-home"/>
                                <p>Messages</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/feedback"
                                className="collapsed"
                                aria-expanded="false"
                            >
                                <i className="fas fa-home"/>
                                <p>Feedback</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default SideBar;