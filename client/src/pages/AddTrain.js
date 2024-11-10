import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/AddTrain.css"
import {message} from "antd";
import axios from 'axios'
function AddTrain() {
  const [trainData, setTrainData] = useState({
    trainId: '',
    trainName: '',
    srccity: '',
    srcstate: '',
    descity: '',
    desstate: '',
    railwayZone:'Select Railway Zone',
    totalSeatingCapacity: '',
  });
  const click1 = () => {
    navigate('/pay');
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(`Updated ${name} to ${value}`);
    setTrainData({ ...trainData, [name]: value });
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
   try{
    const res=await axios.post('api/v1/user/AddTrain',trainData);
    if(res.data.success)
    {
      message.success('Added successfully');
    }
    else{
      message.error(res.data.message);
    }
   }catch(error)
   {
    console.log(error);
    message.error('something went wrong');
   }
  };
  return (
    <div className="add-train-container">
      <h2>Add Train</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="trainId">Train ID:</label>
          <input
            type="text"
            id="trainId"
            name="trainId"
            value={trainData.trainId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="trainName">Train Name:</label>
          <input
            type="text"
            id="trainName"
            name="trainName"
            value={trainData.trainName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" onSubmit={handleSubmit}>
        <label>Source Station:</label>
          <label htmlFor="srccity">City:</label>
          <select
            id="srccity"
            name="srccity"
            value={trainData.srccity}
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
        <div className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="srcstate">State:</label>
          <select
            id="srcstate"
            name="srcstate"
            value={trainData.srcstate}
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
        
        <div className="form-group" onSubmit={handleSubmit}>
        <label>Destination Station:</label>
          <label htmlFor="descity">City:</label>
          <select
            id="descity"
            name="descity"
            value={trainData.descity}
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
        <div className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="desstate">State:</label>
          <select
            id="desstate"
            name="desstate"
            value={trainData.desstate}
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
        <div className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="railwayZone">Railway Zone:</label>
          <select
            id="railwayZone"
            name="railwayZone"
            value={trainData.railwayZone}
            onChange={handleChange}
            required
          >
            <option value="">Select Railway Zone</option>
            <option value="Northern">Northern</option>
            <option value="Western">Western</option>
            <option value="Eastern">Eastern</option>
            <option value="Southern">Southern</option>
          </select>
        </div>
        <div className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="totalSeatingCapacity">Total Seating Capacity:</label>
          <input
            type="text"
            id="totalSeatingCapacity"
            name="totalSeatingCapacity"
            value={trainData.totalSeatingCapacity}
            onChange={handleChange}
            required
          />
        </div>
        <button className="custom-button"onClick={click1}>PAY</button> 
        <button className="custom-button">Book</button>
      </form>
    </div>
  );
}

export default AddTrain;
