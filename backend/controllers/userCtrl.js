const userModel = require("../models/userModels");
const ticketModel = require("../models/ticketModels");
const trainModel=require("../models/trainModels")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register callback
const addPassengerController = async (req, res) => {
  try {
    const exisitingUser = await userModel.findOne({ passengerId: req.body.passengerId });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }
    const {
        passengerId,
        name,
        age,
        dateOfBirth,
        gender,
        occupation,
        email,
        mobileNum,
        nationality,  
        addressCity, 
        addressState} = req.body;
    
    const newUser = new userModel({passengerId,
        name,
        age,
        dateOfBirth,
        gender,
        occupation,
        email,
        mobileNum,
        nationality,   
        addressCity, 
        addressState});
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.Password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If the password is correct, create a JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
      expiresIn: '1h', // Token expiration time
    });

    // Send the token as a response
    res.json({ token });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).send('Internal Server Error');
  }
};
const addTicketController = async (req, res) => {
    try {
      
      const {
        fromStation,
        Berth,
        seatNumber,
        toStation,
        departureDate,
        pnrNumber,
        totalAmount,
        General,
        Class,
       Count,
       trainName} = req.body;
      
      const newTicket = new ticketModel({
        Berth,
        seatNumber,
        fromStation,
        toStation,
        departureDate,
        pnrNumber,
        totalAmount,
        General,
        Class,
       Count,
       trainName});
      await newTicket.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };
  const addTrainController = async (req, res) => {
    try {
      
      const {
        trainId,
        trainName,
        email,
        phone_number,        
        srccity, 
        srcstate,
        descity,
        desstate,
        railwayZone,
        totalSeatingCapacity,
        } = req.body;
      
      const newTrain = new trainModel({
        trainId,
        trainName,       
        srccity, 
        srcstate,
        descity,
        desstate,
        railwayZone,
        totalSeatingCapacity,});
      await newTrain.save();
      res.status(201).send({ message: "Register Sucessfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Register Controller ${error.message}`,
      });
    }
  };
// login callback

module.exports = { loginController, addPassengerController,addTicketController,addTrainController};