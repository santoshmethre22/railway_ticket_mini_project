import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [occupationFilter, setOccupationFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    // Fetch customers data from backend
    axios.get("/api/customers")
      .then(response => {
        setCustomers(response.data);
        setFilteredCustomers(response.data);
      })
      .catch(error => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  useEffect(() => {
    // Apply filters when filter states change
    applyFilters();
  }, [genderFilter, occupationFilter, cityFilter]);
  

  const applyFilters = () => {
    let filteredData = customers;

    // Apply gender filter
    if (genderFilter) {
      filteredData = filteredData.filter(customer => customer.gender === genderFilter);
    }

    // Apply occupation filter
    if (occupationFilter) {
      filteredData = filteredData.filter(customer => customer.occupation === occupationFilter);
    }

    // Apply city filter
    if (cityFilter) {
      filteredData = filteredData.filter(customer => customer.addressCity === cityFilter);
    }

    setFilteredCustomers(filteredData);
  };

  return (
    
    <div style={{ maxWidth: 500 }}>
      <div className="train-container" style={{ backgroundImage: 'url("train.png")', backgroundSize: 'cover', backgroundPosition: 'center', height:1400 ,width:1215 }}>
      <h3>Customer Details</h3>
      <div>
        <label>
          Gender Filter:
          <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Occupation Filter:
          <select value={occupationFilter} onChange={(e) => setOccupationFilter(e.target.value)}>
            <option value="">All</option>
            <option value="private">Private</option>
            <option value="government">Government</option>
          </select>
        </label>
        <label>
          City Filter:
          <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Amaravati">Amaravati</option>
            <option value="Itanagar">Itanagar</option>
            {/* Add other city options here */}
          </select>
        </label>
      </div>
      <table style={{ backgroundColor: 'white', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Occupation</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Nationality</th>
            <th>Address City</th>
            <th>Address State</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => (
            <tr key={customer.passengerId}>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.dateOfBirth}</td>
              <td>{customer.gender}</td>
              <td>{customer.occupation}</td>
              <td>{customer.email}</td>
              <td>{customer.mobileNum}</td>
              <td>{customer.nationality}</td>
              <td>{customer.addressCity}</td>
              <td>{customer.addressState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CustomerTable;
