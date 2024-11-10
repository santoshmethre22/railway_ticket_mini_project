const express = require('express');
const router = express.Router();
const railModel = require('../models/railModels');
const ticketModel = require('../models/ticketModels');

router.get('/train-ctrl', async (req, res) => {
  try {
    const source = req.query.SourceStationName;
    const destination = req.query.DestinationStationName;

    const result = await railModel.aggregate([
      {
        $match: {
          SourceStationName: source, // Filter by source if provided
          DestinationStationName: destination, // Filter by destination if provided
        },
      },
      {
        $project: {
          _id: 0,
          TrainNo: 1,
          TrainName: 1,
          StationCode: 1,
          StationName: 1,
          Arrivaltime: 1,
          DepartureTime: 1,
          Distance: 1,
          SourceStation: 1,
          SourceStationName: 1,
          DestinationStation: 1,
          DestinationStationName: 1,
        },
      },
    ]);

    console.log("Query2 API Response:", result);
    if (result.length === 0) {
      res.status(404).send({
        message: "No data found for the specified criteria",
        success: false,
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error querying data",
      success: false,
    });
  }
});

router.get('/cancel', async (req, res) => {
  try {
    const { pnrNumber } = req.params;

    // Find the ticket with the given PNR number
    const ticket = await ticketModel.findOne({ pnrNumber });

    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket not found' });
    }

    // Perform cancellation logic here
    // For example, you can update the ticket status to "cancelled" in the database

    // Return a success message
    res.status(200).json({ success: true, message: 'Ticket cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling ticket:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});




router.get('/pnr-status', async (req, res) => {
  try {
    const pnrnumber = req.query.pnrNumber;

    const result = await ticketModel.aggregate([
      {
        $match: {
          pnrNumber: pnrnumber,
        },
      },
      {
        $project: {
          _id: 0,
          fromStation: 1,
          toStation: 1,
          Berth: 1,
          seatNumber: 1,
          departureDate: 1,
          General: 0,
          Class: 1,
          Count: 0,
          totalAmount: 0
        },
      },   
      
    ]);

    console.log("Query1 API Response:", result);
    if (result.length === 0) {
      res.status(404).send({
        message: "No data found for the specified criteria",
        success: false,
      });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error querying data",
      success: false,
    });
  }
});


module.exports = router;
