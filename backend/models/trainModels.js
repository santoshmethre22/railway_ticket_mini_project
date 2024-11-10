const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
    trainId: {
        type: Number,
        required: false,
      },
      trainName: {
        type: String,
        required: false,
      },
      srccity: {
        type: String, // Use the sub-schema here
        required: false,
      },
      srcstate: {
        type: String, // Use the sub-schema here
        required: false,
      },
      descity: {
        type: String, // Use the sub-schema here
        required: false,
      },
      desstate: {
        type: String, // Use the sub-schema here
        required: false,
      },
      railwayZone: {
        type: String,
        required: false,
      },
      totalSeatingCapacity: {
        type: Number,
        required: false,
      },
    });
 
const trainModel = mongoose.model("Trains", trainSchema);

module.exports = trainModel;