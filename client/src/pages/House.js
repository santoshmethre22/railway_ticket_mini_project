import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

class ButtonComponent extends React.Component {
  render() {
    return (
      <div className="train-container" style={{ backgroundImage: 'url("22.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height:700 ,width:1400 }}>
        <div>
        <Link to='/train-ctrl' className='btn btn-success w-200 rounded-0'>
          Book
        </Link>
        <Link to='/cancel' className='btn btn-success w-200 rounded-0'>
          Cancel
        </Link>
        <Link to="/food" className='btn btn-success w-200 rounded-0'>
          Catering
        </Link>
      </div>
      </div>
    );
  }
}

export default ButtonComponent;
