
import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


import "../styles/homepage.css"

function HomePage() {
  const navigate = useNavigate();
  const click1 = () => {
    navigate('/add-passenger');
  };
  const click2 = () => {
    navigate('/add-train');
  };
  const click3 = () => {
    navigate('/add-ticket');
  };
  const click4 = () => {
    navigate('/analytics');
  };
  return (
    <div className="centered-container"> 
    <h1>RAILWAY ANALYTICS SYSTEM</h1>
      <Button className="custom-button"onClick={click1}>Add Passenger</Button>
      <Button className="custom-button"onClick={click2}>Add Train</Button>
      <Button className="custom-button"onClick={click3}>Add Ticket</Button>
      

    </div>
  );
}

export default HomePage;

