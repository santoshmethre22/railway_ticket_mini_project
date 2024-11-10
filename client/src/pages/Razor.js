// Startpage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";

function Razor() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  
  const handleCancel = () => {
    navigate('/cancel');
  };

  const handleSearchTrain = () => {
    navigate('/train-ctrl');
  };

  const handleSearchfood = () => {
    navigate('/food');
  };

  const handleSearchpnr = () => {
    navigate('/pnr-status');
  };

  return (
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
                  <li>
                  <Link to="/" className="nav-link">
                    Signout
                    </Link>
                    </li>
                    <li>
                  <Link to="/add-passenger" className="nav-link">
                    Add-Passenger
                    </Link>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="train-container" style={{ backgroundImage: 'url("22.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: 650, width: 1300 }}>
      <div className="container d-flex flex-column align-items-center justify-content-start" style={{ height: '100vh' }}>
        <h4 style={{ color: 'white' }}>Do Your process ...</h4>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button className="btn btn-danger mb-2" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-danger mb-2 " onClick={handleSearchTrain}>Search Train</button>
          <button className="btn btn-danger mb-2 " onClick={handleSearchfood}>Catering</button>
          <button className="btn btn-danger mb-2 " onClick={handleSearchpnr}>PNR-Enquiry</button>
        </div>
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
    
  );
}

export default Razor;

