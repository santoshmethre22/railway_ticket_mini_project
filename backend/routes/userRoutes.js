const express = require("express");
const userController = require("../controllers/userCtrl");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/AddPassenger",userController.addPassengerController);
router.post("/AddTicket",userController.addTicketController);
router.post("/AddTrain",userController.addTrainController);
router.post('/user-login',userController.loginController);


module.exports = router;