import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import '../styles/page.css';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";

function Startpage() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  const click1 = () => {
    navigate('/admin-login');
  };

  const click2 = () => {
    navigate('/user-login');
  };

 

  return (
    <>
    <div
   Style = {{
      backgroundImage:
      'url("train.png")',
   }}
   >
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
      
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <p className="lead">Experience the incredible sights and sounds of the Indian Railways without leaving your couch. Travel has never been easier.</p>
          <Button className="btn btn-primary mx-2" onClick={click1}>
            Admin Login
          </Button>
          <Button className="btn btn-success mx-2" onClick={click2}>
            User Login
          </Button>
    
        </div>
      </div>
      <footer className="fixed-bottom">
        <div className="container d-flex flex-column align-items-center">
          <div className="mt-3">
            <p className="copyright">© 2024 Jennie</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Startpage;
