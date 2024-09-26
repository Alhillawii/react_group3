import Footer from './components/dashboard/Footer.jsx';
import Sidebar from './components/dashboard/Sidebar.jsx';
import Navbar from './components/dashboard/Navbar.jsx';
import MainDash from './pages/dashboard/MainDash.jsx';
import Students from "./pages/dashboard/Students.jsx";
import Teachers from "./pages/dashboard/Teachers.jsx";
import Messages from "./pages/dashboard/Messages.jsx";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
                            <Route path="/teachers" element={<Teachers />} />
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

