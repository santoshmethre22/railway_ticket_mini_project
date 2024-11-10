import React, { useState, useEffect  } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import "../styles/AddPassenger.css"
import { Link } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";

function AdminLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
      alert('Login successfully!');
      // You can add further actions here such as redirecting to another page
    };
  

    const [formData, setFormData] = useState({
        name: '',
        password: '',});
        const handleChange = (e) => {
            const { name, value } = e.target;
        
            console.log(`Updated ${name} to ${value}`);
              setFormData({ ...formData, [name]: value });
            
          };
          const navigate = useNavigate();
    const click1 = () => {
      navigate('/analytics');
    };
          const handleSubmit = async (e) => {
            e.preventDefault();}

            const [currentTime, setCurrentTime] = useState(new Date());

            useEffect(() => {
              const intervalId = setInterval(() => {
                setCurrentTime(new Date());
              }, 1000);
              return () => clearInterval(intervalId);
            }, []);
          
            const formattedTime = currentTime.toLocaleTimeString();  
            return (
              <>
              <div style={{ backgroundImage: 'url("11.jpg")' }}>
              <header className="main_header fixed_header">
                <div className="container">
                  <div className="logo_head">
                    <img src={IRCTCLogo} alt="IRCTC Logo" className="logo-img" />
                    <p className="display-4"> IRCTC Portal</p>
                    <div className='dark_mode'>
                      <input
                        className='dark_mode_input'
                        type='checkbox'
                        id='darkmode-toggle'
                      />
                      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
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
                <div className="add-passenger-container">
                  <h2>Admin Login</h2>
                  <div className="personal-info">
                  <form layout="vertical" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name :</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password :</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div></form></div>
                    {isLoggedIn ? (
        // If user is logged in, show a different link or redirect
        // You can replace '/pay' with the desired redirect link
        <Link to="/analytics" className="btn btn-success w-100 rounded-0">
          Go to next..
        </Link>
      ) : (
        // If user is not logged in, show login link with onClick handler
        <button onClick={handleLogin} className="btn btn-success w-100 rounded-0">
          Log in
        </button>
      )}
                    <footer className="fixed-bottom">
        <div className="container d-flex flex-column align-items-center">
          <div className="mt-3">
            <p className="copyright">© 2024 Jennie</p>
          </div>
        </div>
      </footer>
                    </div>
                    </div> 
                    </>
                    );

}
export default AdminLogin;