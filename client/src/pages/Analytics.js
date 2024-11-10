import React, { useState, useEffect  } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import "../styles/AddPassenger.css"
import { Link } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";
function Analytics() {
  const navigate = useNavigate();

  const click1 = () => {
    navigate('/admin1');
  };

  const click2 = () => {
    navigate('/admin2');
  };

  const click3 = () => {
    navigate('/admin3');
  };
  const click4 = () => {
    navigate('/delete-train');

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
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="col-md-6 text-center">
          <h1 className="mb-5">RAILWAY ADMIN ZONE</h1>
          <div className="d-flex flex-column align-items-center">
            <Button type="primary" size="small" style={{ background: 'red', marginBottom: '10px' }} onClick={click1}>ADD Train</Button>
            <Button type="primary" size="small" style={{ background: 'red', marginBottom: '10px' }} onClick={click2}>Customer Status</Button>
            <Button type="primary" size="small" style={{ background: 'red' }} onClick={click3}>Ticket-Info</Button>
            <Button type="primary" size="small" style={{ background: 'red' }} onClick={click4}>Delete-Train</Button>
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
    </div>
  );
}

export default Analytics;
