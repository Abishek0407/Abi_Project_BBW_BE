const Booking = require("../model/BookingModel");

const createBooking = async (req, res) => {
  try {
    const { name, phone, address, service, note } = req.body;
    if (!name || !phone || !address || !service)
      return res.status(400).json({ success: false, message: "All required fields must be filled" });
    if (!/^[6-9]\d{9}$/.test(phone))
      return res.status(400).json({ success: false, message: "Enter a valid 10-digit Indian mobile number" });
    const newBooking = await Booking.create({ name, phone, address, service, note });
    res.status(201).json({ success: true, message: "Booking saved successfully", booking: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error while saving booking", error: error.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not get bookings" });
  }
};

//  Public route — just returns pending count (no sensitive data)
const getPendingCount = async (req, res) => {
  try {
    const count = await Booking.countDocuments({ status: "pending" });
    res.status(200).json({ success: true, count });
  }catch (error) {
  console.log(error);

  res.status(500).json({
    success: false,
    message: "Could not get count",
    error: error.message
  });
}

const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await Booking.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated)
      return res.status(404).json({ success: false, message: "Booking not found" });
    res.status(200).json({ success: true, message: "Status updated", booking: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not update status", error: error.message });
  }
};

module.exports = { createBooking, getAllBookings, getPendingCount, updateBookingStatus };
