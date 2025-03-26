import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define the Demo Booking Schema
const demoBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String },
  created_at: { type: Date, default: Date.now },
});

const DemoBooking = mongoose.model('DemoBooking', demoBookingSchema);

// API Endpoint to Save Demo Booking
app.post('/bookings', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newBooking = new DemoBooking({ name, email, phone, message });
    await newBooking.save();
    res.status(201).json({ message: 'Demo booking saved successfully', data: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Error saving demo booking', error: error.message });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
  })
  .catch((err) => console.error('MongoDB connection error:', err));