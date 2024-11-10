import React, { useState, useEffect  } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import "../styles/AddPassenger.css"
import { Link } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";

const TrainTicketInfo = () => {
  const [trainName, setTrainName] = useState('');
  const [bookedCount, setBookedCount] = useState(null);
  const [availableSeats, setAvailableSeats] = useState(null);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch booked count
      const bookedCountResponse = await fetch(`/api/trains/booked-count/${trainName}`);
      const bookedCountData = await bookedCountResponse.json();
      setBookedCount(bookedCountData.count);

      // Fetch available seats
      const availableSeatsResponse = await fetch(`/api/trains/available-seats/${trainName}`);
      const availableSeatsData = await availableSeatsResponse.json();
      setAvailableSeats(availableSeatsData.availableSeats);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
    <div className="train-container" style={{ backgroundImage: 'url("train.png")', backgroundSize: 'cover', backgroundPosition: 'center', height:700 ,width:1215 }}>
      
    <div className="container mt-5" style={{ position: 'relative' }}>
      <h3 className="mb-4">Train Ticket Info</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
         

        <label>
          Train_Name
          <select value={trainName} className="form-control" id="trainName" onChange={(e) => setTrainName(e.target.value)}>
            <option value="TCN -MS EXPRESS">TCN -MS EXPRESS</option>
            <option value="TN-MY-EXPRESS">TN-MY-EXPRESS</option>
            <option value="ED-CBE PASSR">ED-CBE PASSR</option>
            <option value="CBE-MTP-EXPRESS">CBE-MTP-EXPRESS</option>
          </select>
        </label>
        </div>
        

        <div className="row mt-3">
          <div className="col-auto">
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="mt-4">
        <table style={{ backgroundColor: 'white', width: '100%' }}>
          <thead>
            <tr>
              <th scope="col">Train Name</th>
              <th scope="col">Booked Tickets</th>
              <th scope="col">Available Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{trainName}</td>
              <td>{bookedCount !== null ? bookedCount : '---'}</td>
              <td>{availableSeats !== null ? availableSeats : '---'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TrainTicketInfo;
