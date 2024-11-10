import axios from 'axios';
import { message } from 'antd';
// Startpage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";



function DeleteTicketByPNR() {
  const [pnrNumber, setPnrNumber] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const handleDeleteTicket = async () => {
    try {
      const response = await axios.delete(`/api/tickets/${pnrNumber}`);
      if (response.data.success) {
        message.success('Ticket deleted successfully.');
        // Optionally, you can perform any additional actions after successful deletion.
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting ticket:', error);
      message.error('Failed to delete ticket. Please try again later.');
    }
  };

  const handleInputChange = (event) => {
    setPnrNumber(event.target.value);
  };

  return (
    <div>
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
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
    <div className="train-container" style={{ backgroundImage: 'url("bg3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height:700 ,width:1400 }}>
    <div className="container mt-5">

      <h2 className="text-center mb-4">Cancel Ticket</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="pnrNumber">PNR Number:</label>
            <input
              type="text"
              className="form-control"
              id="pnrNumber"
              value={pnrNumber}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-danger btn-block" onClick={handleDeleteTicket}>Delete Ticket</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default DeleteTicketByPNR;
