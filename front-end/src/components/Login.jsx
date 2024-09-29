import  { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            setAuth({
                user: response.data.user,
                token: response.data.token,
                role_id: response.data.role_id
            });
            if (response.data.role_id > 0) {
                navigate('/admin/dashboard');
            }  else {
                navigate('/');
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;