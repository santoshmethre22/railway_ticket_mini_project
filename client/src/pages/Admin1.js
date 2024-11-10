// src/AddTrainForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddTrainForm = () => {
  const [formData, setFormData] = useState({
    TrainNo: '',
    TrainName: '',
    SEQ: '',
    StationCode: '',
    StationName: '',
    Arrivaltime: '',
    DepartureTime: '',
    Distance: '',
    SourceStation: '',
    SourceStationName: '',
    DestinationStation: '',
    DestinationStationName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/trains', formData);
      console.log('Train added successfully:', response.data);
      setFormData({
        TrainNo: '',
        TrainName: '',
        SEQ: '',
        StationCode: '',
        StationName: '',
        Arrivaltime: '',
        DepartureTime: '',
        Distance: '',
        SourceStation: '',
        SourceStationName: '',
        DestinationStation: '',
        DestinationStationName: ''
      });
    } catch (error) {
      console.error('Error adding train:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Train</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="TrainNo" placeholder="Train Number" value={formData.TrainNo} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="TrainName" placeholder="Train Name" value={formData.TrainName} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="SEQ" placeholder="Sequence" value={formData.SEQ} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="StationCode" placeholder="Station Code" value={formData.StationCode} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="StationName" placeholder="Station Name" value={formData.StationName} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="Arrivaltime" placeholder="Arrival Time" value={formData.Arrivaltime} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="DepartureTime" placeholder="Departure Time" value={formData.DepartureTime} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="Distance" placeholder="Distance" value={formData.Distance} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="SourceStation" placeholder="Source Station" value={formData.SourceStation} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="SourceStationName" placeholder="Source Station Name" value={formData.SourceStationName} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="DestinationStation" placeholder="Destination Station" value={formData.DestinationStation} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="DestinationStationName" placeholder="Destination Station Name" value={formData.DestinationStationName} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-danger">Add Train</button>
        </div>
      </form>
    </div>
  );
};

export default AddTrainForm;
