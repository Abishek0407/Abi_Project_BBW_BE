const express = require("express");
const { createBooking, getAllBookings, getPendingCount, updateBookingStatus } = require("../controller/BookingController");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router.post("/create", createBooking);
router.get("/all", adminAuth, getAllBookings);
router.get("/pending-count", getPendingCount);  
router.patch("/status/:id", updateBookingStatus);

module.exports = router;