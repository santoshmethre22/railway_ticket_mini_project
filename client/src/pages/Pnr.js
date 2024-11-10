import React, { useState } from 'react';
import axios from 'axios';

function TicketTable() {
  const [pnrNumber, setPnrNumber] = useState('');
  const [ticketData, setTicketData] = useState(null);

  const handleFetchTicket = async () => {
    try {
      const response = await axios.get(`/api/tickets/${pnrNumber}`);
      setTicketData(response.data);
    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
  };

  const handleInputChange = (event) => {
    setPnrNumber(event.target.value);
  };

  return (
    <div className="train-container" style={{ backgroundImage: 'url("train.png")', backgroundSize: 'cover', backgroundPosition: 'center', height:690 ,width:1215 }}>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Fetch Ticket By PNR</h2>
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
          <button className="btn btn-primary btn-block" onClick={handleFetchTicket}>Fetch Ticket</button>
        </div>
      </div>
      {ticketData && (
        <div className="mt-4">
        <table style={{ backgroundColor: 'pink', width: '100%' }}>
            <thead>
              <tr>
                <th>From Station</th>
                <th>To Station</th>
                <th>Departure Date</th>
                <th>Class</th>
                <th>General</th>
                <th>PNR Number</th>
                <th>Total Amount</th>
                <th>Count</th>
                <th>Seat Number</th>
                <th>Berth</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ticketData.fromStation}</td>
                <td>{ticketData.toStation}</td>
                <td>{ticketData.departureDate}</td>
                <td>{ticketData.Class}</td>
                <td>{ticketData.General}</td>
                <td>{ticketData.pnrNumber}</td>
                <td>{ticketData.totalAmount}</td>
                <td>{ticketData.Count}</td>
                <td>{ticketData.seatNumber}</td>
                <td>{ticketData.Berth}</td>
                {/* Add more cells as needed */}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
}

export default TicketTable;
