import { NavLink } from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebar" data-background-color="dark">
            <div className="sidebar-logo">
                {/* Logo Header */}
                <div className="logo-header" data-background-color="dark">
                    <NavLink to="/admin/dashboard" className="logo">
                        <img
                            src="public/img/kaiadmin/logo_light.svg"
                            alt="navbar brand"
                            className="navbar-brand"
                            height={20}
                        />
                    </NavLink>
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
                        <li className="nav-item">
                            <NavLink to="/admin/dashboard" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/teachers" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Teachers</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/students" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Students</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/messages" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Messages</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/managers" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Managers</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/supervisors" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Supervisors</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/feedback" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Feedback</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/assigments" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Assignment</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/subjects" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Subjects</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/classes" className={({isActive}) => isActive ? "active" : ""}>
                                <p>Classes</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;