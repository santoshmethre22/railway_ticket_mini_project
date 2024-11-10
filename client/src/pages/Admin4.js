import React, { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

function DeleteTrain() {
  const [TrainNo, setTrainNo] = useState('');

  const handleDeleteTicket = async () => {
    try {
      const response = await axios.delete(`/api/train/${TrainNo}`);
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
    setTrainNo(event.target.value);
  };

  return (
    <div className="train-container" style={{ backgroundImage: 'url("bg3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height:700 ,width:1400 }}>
    <div className="container mt-5">

      <h2 className="text-center mb-4">Delete Train </h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="TrainNo">Train Number:</label>
            <input
              type="text"
              className="form-control"
              id="TrainNo"
              value={TrainNo}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-danger btn-block" onClick={handleDeleteTicket}>Delete Ticket</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DeleteTrain;
