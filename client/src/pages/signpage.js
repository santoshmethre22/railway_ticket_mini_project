import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import '../styles/page.css';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import '../styles/DarkMode.css';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password })
            .then(res => {
                navigate('/user-login');
            })
            .catch(err => console.log(err));
    };

    const [currentTime, setCurrentTime] = useState(new Date());
    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <>
            <div
                style={{
                    backgroundImage: 'url("/22.jpg")', // Assuming 22.jpg is in the public directory
                }}
            >
                <header className="main_header fixed_header">
                    <div className="container">
                        <div className="logo_head">
                            <img src={IRCTCLogo} alt="IRCTC Logo" className="logo-img" />
                            <p className="display-4"> IRCTC Portal</p>
                            <div className="dark_mode">
                                <input
                                    className="dark_mode_input"
                                    type="checkbox"
                                    id="darkmode-toggle"
                                />
                                <label className="dark_mode_label" htmlFor="darkmode-toggle">
                                    <Sun />
                                    <Moon />
                                </label>
                            </div>
                            <div>
                                <p>Current Time: {formattedTime}</p>
                            </div>
                        </div>
                        <div className="menu_box">
                            <nav className="top_nav_links navbar navbar-expand-lg">
                                <div className="collapse navbar-collapse" id="topNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to="/history" className="nav-link">
                                                History
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Contacts" className="nav-link">
                                                Contacts
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Contacts" className="nav-link">
                                                Trust
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <div className="train-container" style={{ backgroundImage: 'url("/train.png")', backgroundSize: 'cover', backgroundPosition: 'center', height:700 ,width:1215 }}>
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className="form-control rounded-0"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Register
                        </button>
                    </form>
                    <p>Already Have an Account</p>
                    <Link
                        to="/user-login"
                        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Signup;
