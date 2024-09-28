import Footer from './components/dashboard/Footer.jsx';
import Sidebar from './components/dashboard/Sidebar.jsx';
import Navbar from './components/dashboard/Navbar.jsx';
import MainDash from './pages/dashboard/MainDash.jsx';
import Students from "./pages/dashboard/Students.jsx";
import Teachers from "./pages/dashboard/Teachers.jsx";
import Messages from "./pages/dashboard/Messages.jsx";
import EditTeacher from './pages/dashboard/EditTeacher.jsx';
import TeacherDetails from './pages/dashboard/TeacherDetails.jsx';
import Managers from './pages/dashboard/Managers.jsx';
import AddManager from './pages/dashboard/AddManager.jsx';
import ManagerDetails from './pages/dashboard/ManagerDetails.jsx';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddTeacher from './pages/dashboard/AddTeacher.jsx';
import EditManager from './pages/dashboard/EditManager.jsx';

function App() {
    return (
        <Router>
            <div className="main-panel">
                <Sidebar />
                <Navbar />

                <div className="container">
                    <div className="page-inner">

                        <Routes>
                            <Route path="/" element={<MainDash />} />
                            <Route path="/students" element={<Students />} />
                            <Route path="/managers" element={<Managers />} />
                            <Route path="/managers/add" element={<AddManager />} />
                                   <Route path="/managers/:id" element={<ManagerDetails />} />
                            <Route path="/managers/edit/:id" element={<EditManager />} /> 

                            <Route path="/teachers" element={<Teachers />} />
                                   <Route path="/teachers/:id" element={<TeacherDetails />} />
                                    <Route path="/teachers/add" element={<AddTeacher />} />

                            <Route path="/teachers/edit/:id" element={<EditTeacher />} /> 

                            <Route path="/messages" element={<Messages />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

