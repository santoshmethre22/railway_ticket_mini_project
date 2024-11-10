const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db.js");
const railModel=require("./models/railModels")
const userModel  = require("./models/userModels");
const Sign = require("./models/signModels");
const mongoose = require("mongoose");
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/signModels')
const app = express()

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
connectDB();


const varifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) {
      return res.json("Token is missing")
  } else {
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
          if(err) {
              return res.json("Error with token")
          } else {
              if(decoded.role === "admin") {
                  next()
              } else {
                  return res.json("not admin")
              }
          }
      })
  }
}

app.get('/dashboard',varifyUser ,(req, res) => {
  res.json("Success")
})

app.post('/register', (req, res) => {
  const {name, email, password} = req.body;
  bcrypt.hash(password, 10)
  .then(hash => {
      UserModel.create({name, email, password: hash})
      .then(user => res.json("Success"))
      .catch(err => res.json(err))
  }).catch(err => res.json(err))
})

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  UserModel.findOne({email: email})
  .then(user => {
      if(user) {
          bcrypt.compare(password, user.password, (err, response) => {
              if(response) {
                const token = jwt.sign({email: user.email, role: user.role},
                      "jwt-secret-key", {expiresIn: '1d'})  
                  res.cookie('token', token)
                  return res.json({Status: "Success", role: user.role})
              }else {
                  return res.json("The password is incorrect")
              }
          })
      } else {
          return res.json("No record existed")
      }
  })
})
app.use(morgan("dev"));







// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/analytics", require("./routes/query1Routes.js"));


// Route to handle user login
app.post('/api/v1/user/user-login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Sign.findOne({ username, password });
    if (user) {
      res.json('Success');
    } else {
      res.status(400).json({ msg: 'No record existed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.get("/api/customers", async (req, res) => {
  try {
    const customers = await userModel.find();
    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const ticketModel = require('./models/ticketModels');


// Assuming you're using Express.js, you can create a route to insert ticket data
app.post('/api/v1/addTicket', async (req, res) => {
  try {
    const ticketData = req.body; // Assuming the request body contains the ticket data
    const ticket = new ticketModel(ticketData); // Creating a new ticket instance
    await ticket.save(); // Saving the ticket data to the database
    res.json({ success: true, message: 'Ticket added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// API endpoint to delete a ticket by PNR number
app.delete('/api/tickets/:pnrNumber', async (req, res) => {
  const { pnrNumber } = req.params;

  try {
    // Find the ticket by PNR number and delete it
    const deletedTicket = await ticketModel.findOneAndDelete({ pnrNumber });

    if (deletedTicket) {
      return res.json({ success: true, message: 'Ticket deleted successfully.' });
    } else {
      return res.status(404).json({ success: false, message: 'Ticket not found.' });
    }
  } catch (error) {
    console.error('Error deleting ticket:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete ticket.' });
  }
});

// API endpoint to delete a ticket by PNR number
app.delete('/api/train/:TrainNo', async (req, res) => {
  const { TrainNo } = req.params;

  try {
    // Find the ticket by PNR number and delete it
    const deletedTicket = await railModel.findOneAndDelete({ TrainNo });

    if (deletedTicket) {
      return res.json({ success: true, message: 'Train deleted successfully.' });
    } else {
      return res.status(404).json({ success: false, message: 'Train not found.' });
    }
  } catch (error) {
    console.error('Error deleting train:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete train.' });
  }
});


app.get('/api/tickets/:pnrNumber', async (req, res) => {
  const { pnrNumber } = req.params;

  try {
    const ticket = await ticketModel.findOne({ pnrNumber });
    if (ticket) {
      return res.json(ticket);
    } else {
      return res.status(404).json({ message: 'Ticket not found.' });
    }
  } catch (error) {
    console.error('Error fetching ticket:', error);
    return res.status(500).json({ message: 'Failed to fetch ticket.' });
  }
});


app.post('/api/trains', async (req, res) => {
  try {
    const train = await railModel.create(req.body);
    res.status(201).json(train);
  } catch (error) {
    console.error('Error adding train:', error);
    res.status(500).json({ error: 'Failed to add train' });
  }
});

// Define route to get count of booked tickets for a specific train
app.get('/api/trains/booked-count/:trainName', async (req, res) => {
  try {
    const trainName = req.params.trainName;

    // Query the database to get the count of booked tickets for the given train name
    const seatCount = await ticketModel.countDocuments({ Train_Name: trainName });

    // Send the seat count as a JSON response
    res.json({ trainName, count: seatCount });
  } catch (error) {
    console.error('Error fetching booked train count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  // Define a route to handle the POST request
  app.post('/api/v1/user/addTicket1', async (req, res) => {
    try {
      const newTicket = new ticketModel(req.body);
      await newTicket.save();
      res.status(201).json({ success: true, message: 'Ticket added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

// Define route to get available seats for a specific train
app.get('/api/trains/available-seats/:trainName', async (req, res) => {
  try {
    const trainName = req.params.trainName;

    // Get the count of booked tickets for the given train name
    const bookedSeats = await ticketModel.countDocuments({ Train_Name: trainName });

    // Calculate available seats
    const maxSeats = 1000;
    const availableSeats = maxSeats - bookedSeats;

    // Send the available seats count as a JSON response
    res.json({ trainName, availableSeats });
  } catch (error) {
    console.error('Error fetching available seats:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





const PORT = process.env.PORT || 8080; 

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

