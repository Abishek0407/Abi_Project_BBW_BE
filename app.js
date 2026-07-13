const express = require("express");
const cors = require("cors");
const app = express.Router()

app.use("/Booking", require("./router/BookingRouter"))


module.exports = app;