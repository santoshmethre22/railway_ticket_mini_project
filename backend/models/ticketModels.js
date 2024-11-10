const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  fromStation: {
    type: String,
    required: [true, "From Station is required"],
  },
  toStation: {
    type: String,
    required: [true, "To Station is required"],
  },
  departureDate: {
    type: Date,
    required: [true, "Departure Date is required"],
  },
   Class: {
    type: String,
    required: [true, "Class is required"],
  },
  Berth: {
    type: String,
    required: [true, "Berth Preference is required"],
  },
  trainName: {
    type: String,
    required: [true, "Train Name is required"],
  },
  pnrNumber: {
    type: Number,
    required: [true, "PNR Number is required"],
  },
  totalAmount: {
    type: Number,
    required: [true, "Total Amount is required"],
  },
Count: {
  type: Number,
    required: [true, "Count is required"],
  },
  seatNumber: {
    type: Number,
    required: [true, "Seat Number is required"],
  },
  General: {   
    type: String,
    required: [true, "Email is required"],
    // Additional validations can be added here, e.g., regex for email format
  },
});

const ticketModel = mongoose.model("Ticket", ticketSchema);

module.exports = ticketModel;
