const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    passengerId: {
    type: Number,
    required: [true, "passengerId is require"],
  },
  name: {
    type: String,
    required: [true, "name is require"],
  },
  age: {
    type: Number,
    required: [true, "age is require"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "dateOfBirth is require"],
  },
  gender: {
    type: String,
    required: [true, "gender is require"],
  },
  occupation: {
    type: String,
    required: [true, "occupation is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  mobileNum: {
    type: Number,
    required: [true, "mobileNum is require"],
  },
  nationality: {
    type: String,
    required: [true, "nationality is require"],
  },  
  addressCity: {
    type: String,
    required: [true, "addressCity is require"],
  },
  addressState: {
    type: String,
    required: [true, "addressState is require"],
  },

});
 
const userModel = mongoose.model("Passengers", userSchema);

module.exports = userModel;