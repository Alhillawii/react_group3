// AdminRoutes
import { Routes, Route } from 'react-router-dom';
import MainDash from './pages/dashboard/MainDash.jsx';
import Students from "./pages/dashboard/Students.jsx";
import Messages from "./pages/dashboard/Messages.jsx";
import Supervisors from "./pages/dashboard/Supervisors.jsx";
import UserDetailPage from "./pages/dashboard/UserDetailPage.jsx";
import UserUpdatePage from "./pages/dashboard/UserUpdatePage.jsx";
import UserAddPage from "./pages/dashboard/UserAddPage.jsx";
import Feedback from "./pages/dashboard/Feedback.jsx";
import Classes from "./pages/dashboard/Classes.jsx";
import Managers from "./pages/dashboard/Managers.jsx";
import AddManager from './pages/dashboard/AddManager.jsx';
import ManagerDetails from './pages/dashboard/ManagerDetails.jsx';
import EditManager from './pages/dashboard/EditManager.jsx';
import Teachers from "./pages/dashboard/Teachers.jsx";
import AddTeacher from './pages/dashboard/AddTeacher.jsx';
import EditTeacher from './pages/dashboard/EditTeacher.jsx';
import TeacherDetails from './pages/dashboard/TeacherDetails.jsx';
import Assigment from "./pages/dashboard/Assigment.jsx";
import Subjects from './pages/dashboard/Subjects.jsx';

const AdminRoutes = () => (
    <Routes>
        <Route path="dashboard" element={<MainDash />} />
        <Route path="messages" element={<Messages />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="classes" element={<Classes />} />
        <Route path="assigments" element={<Assigment />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="user/:roleId/:id" element={<UserDetailPage />} />
        <Route path="user-update/:id" element={<UserUpdatePage />} />
        <Route path="user-add/:roleId" element={<UserAddPage />} />
        <Route path="managers" element={<Managers />} />
        <Route path="managers/add" element={<AddManager />} />
        <Route path="managers/:id" element={<ManagerDetails />} />
        <Route path="managers/edit/:id" element={<EditManager />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="teachers/add" element={<AddTeacher />} />
        <Route path="teachers/:id" element={<TeacherDetails />} />
        <Route path="teachers/edit/:id" element={<EditTeacher />} />
        <Route path="supervisors" element={<Supervisors />} />
        <Route path="students" element={<Students />} />
    </Routes>
);

export default AdminRoutes;