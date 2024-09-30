import { Link } from "react-router-dom";
// import  { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
function SideBar() {
    // const { auth } = useContext(AuthContext);
    // const adminRoles = [1,2,3];
   return (

        <div className="sidebar" data-background-color="dark">
            <div className="sidebar-logo">
                {/* Logo Header */}
                <div className="logo-header" data-background-color="dark">
                    <Link to="/admin/dashboard" className="logo">
                        <img
                            src="https://www.ittihad.edu.jo/wp-content/uploads/2022/09/ittihad-logo.png"
                            alt="navbar brand"
                            className="navbar-brand"
                            height={60}
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
            <div>
                <div className="sidebar-content">

                    <ul className="nav nav-secondary">
                        <li className="nav-item active">
                            <Link to="/admin/dashboard"


                                  className="collapsed"
                                  aria-expanded="false"
                            >

                                <p>Dashboard</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/admin/teachers"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Teachers</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/admin/students"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>students</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>

                        <li className="nav-item">
                            <Link

                                to="/admin/messages"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Messages</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/admin/managers"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Managers</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>

                        <li className="nav-item">
                            <Link

                                to="/admin/supervisor"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Supervisors</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/admin/feedback"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Feedback</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/admin/assigments"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Assigment</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/admin/subjects"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Subjects</p>
                            </Link>
                            <div className="collapse"></div>
                        </li>
                        <li className="nav-item">
                            <Link

                                to="/admin/classes"
                                className="collapsed"
                                aria-expanded="false"
                            >

                                <p>Classes</p>
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