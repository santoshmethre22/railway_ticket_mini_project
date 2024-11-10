import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IRCTCLogo from '../pictures/IRCTC-Logo.png';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "../styles/DarkMode.css";

const FoodList = () => {
  const [foods] = useState([
    { id: 1, foodname: 'idly', image: 'food.jpeg', price: 88 },
    { id: 2, foodname: 'dosa', image: 'dosa.jpeg', price: 120 },
    { id: 3, foodname: 'poori', image: 'poori.jpeg', price: 100 },
    { id: 4, foodname: 'briyani', image: 'briyani.jpeg', price: 180 },
    { id: 5, foodname: 'Noodles', image: 'noodles.jpeg', price: 150 },
    { id: 6, foodname: 'SUSHI', image: 'sushii.jpeg', price: 150 },
    { id: 7, foodname: 'TACOS', image: 'tacos.jpeg', price: 150 },
    { id: 8, foodname: 'BURGER', image: 'burger.jpeg', price: 150 },
    { id: 9, foodname: 'PIZZA', image: 'pizza.jpeg', price: 150 },
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to filter foods by category
  const filterByCategory = (category) => {
    const filtered = foods.filter(food => food.foodname === category);
    setFilteredFoods(filtered);
    setSelectedCategory(category);
  };

  // Function to handle adding item to cart
  const addToCart = (food) => {
    setCart(prevCart => [...prevCart, food]);
    setTotalAmount(prevAmount => prevAmount + food.price);
    console.log(`Added ${food.foodname} to cart`);
  };

  // Function to handle payment using Razorpay
  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: totalAmount * 100, // Amount is in paisa
      currency: "INR",
      name: "IRCTC Catering",
      description: "Payment for food items",
      image: IRCTCLogo, // Your logo URL
      handler: function (response) {
        console.log("Payment successful:", response);
        setCart([]);
        setTotalAmount(0);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "Customer Contact Number",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
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

      <div className="container mt-5">
        <h1 className="mt-5 mb-4 text-center">IRCTC Catering</h1>
        <div className="mb-4">
          <select className="form-select" value={selectedCategory} onChange={(e) => filterByCategory(e.target.value)}>
            <option value="">All</option>
            <option value="idly">Idly</option>
            <option value="dosa">Dosa</option>
            <option value="poori">Poori</option>
            <option value="briyani">Briyani</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredFoods.map(food => (
            <div key={food.id} className="col">
              <div className="card">
                <img src={food.image} className="card-img-top" alt={food.foodname} style={{ objectFit: 'cover', height: '250px' }} />
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{food.foodname}</h5>
                    <p className="card-text">Price: ${food.price}</p>
                  </div>
                  <button className="btn btn-primary" onClick={() => addToCart(food)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <p>Total items in cart: {cart.length}</p>
              <p>Total amount: ${totalAmount}</p>
            </div>
            <div className="col">
              <button className="btn btn-success" onClick={handlePayment}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
