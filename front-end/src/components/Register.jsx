import  { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://your-backend-url/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation
            });
            setAuth({ token: response.data.token, role: response.data.role });
            navigate('/home');
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="cont">
            <div className="form sign-up">
                <h2>Create your Account</h2>
                <label>
                    <span>Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                </label>
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </label>
                <label>
                    <span>Password Confirmation</span>
                    <input
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                </label>
                <button type="button" className="submit" onClick={handleSubmit}>
                    Sign Up
                </button>
            </div>

            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h3>Already have an account? Sign in!</h3>
                    </div>
                    <div className="img__btn" onClick={() => navigate('/login')}>
                        <span className="m--in">Sign In</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
