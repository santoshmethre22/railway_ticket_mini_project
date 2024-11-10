

import React, { useState, useEffect } from 'react';
import { message } from "antd";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";
import '../styles/page.css';

function AddPassenger() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formData, setFormData] = useState({
    passengerId: '',
    name: '',
    age: '',
    dateOfBirth: '',
    gender: 'male',
    occupation: 'government',
    email: '',
    mobileNum: '',
    nationality: '',
    addressCity: '',
    addressState: '',
  });
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
      const res = await axios.post('api/v1/user/AddPassenger', formData);

      if (res.data.success) {
        message.success('Added successfully');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error('Axios Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(`Updated ${name} to ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
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
      <h2>Add Passenger</h2>
      <div className="personal-info">
        <form layout="vertical" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Information</legend>
            <div className="form-group">
          <label htmlFor="passengerId">Aadhar Number :</label>
          <input
            type="text"
            id="passengerId"
            name="passengerId"
            value={formData.passengerId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
        Gender:  <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            /> Male
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            /> Female
           
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          >
            <option value="government">Government</option>
            <option value="private">Private</option>
          </select>
        </div>
          </fieldset>
        </form>
      </div>
      <div className="contact-info">
        <form layout="vertical" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact Information</legend>
             <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder='name@gmail.com'
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNum">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNum"
            name="mobileNum"
            value={formData.mobileNum}
            onChange={handleChange}
            required
            placeholder='+91-xxx-xxx-xxxx'
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressCity">City:</label>
          <select
            id="addressCity"
            name="addressCity"
            value={formData.addressCity}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="Amaravati">Amaravati</option>
            <option value="Itanagar">Itanagar</option>
            <option value="Dispur">Dispur</option>
            <option value="Patna">Patna</option>
            <option value="Raipur">Raipur</option>
            <option value="Panaji">Panaji</option>
            <option value="Gandhi Nagar">Gandhi Nagar</option>
            <option value="Chandigar">Chandigar</option>
            <option value="Shimla">Shimla</option>
            <option value="Srinagar">Srinagar</option>
            <option value="Ranchi">Ranchi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Imphal">Imphal</option>
            <option value="Shillong">Shillong</option>
            <option value="Aizawl">Aizawl</option>
            <option value="Kohima">Kohima</option>
            <option value="Bhubaneshwar">Bhubaneshwar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Gangtok">Gangtok</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Agartala">Agartala</option>
            <option value="Lucknow">Lucknow</option>
            <option value="DehraDun">DehraDun</option>
            <option value="Kolkata">Kolkata</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Leh">Leh</option>
            <option value="Port Blair">Port Blair</option>
            <option value="Puducherry">Pondicherry</option>
            <option value="Kavaratti">Kavaratti</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Silvassa">Silvassa</option>
            <option value="Daman">Daman </option>
            <option value="Vijawada">Vijawada</option>
            <option value="Tezu">Tezu</option>
            <option value="Gujahati">Gujahati</option>
            <option value="Nalanda">Nalanda</option>
            <option value="Bhilai">Bhilai</option>
            <option value="Mapusa">Mapusa</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Dharamshala">Dharamshala</option>
            <option value="Jammu ">Jammu </option>
            <option value="Madurai">Madurai</option>
            
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="addressState">State:</label>
          <select
            id="addressState"
            name="addressState"
            value={formData.addressState}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telagana">Telagana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi"> Delhi</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Andaman and Nicobar">Andaman and Nicobar</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
        
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>
          </fieldset>
          <button type="submit">Add Passenger</button>
        </form>
      </div>
      <div className="form-group">
     
      </div>
    </div>
    </>
  );
}

export default AddPassenger;