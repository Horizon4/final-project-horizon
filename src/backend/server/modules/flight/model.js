import mongoose, { Schema } from 'mongoose';

const FlightSchema = new Schema({
  origin: {
    type: String,
    required: true,
    minLength: [3, 'Flight origins and destinations must be 3-character city/airport codes, e.g., NYC or LGA.'],
    maxLength: [3, 'Flight origins and destinations must be 3-character city/airport codes, e.g., NYC or LGA.']
  },
  destination: {
    type: String,
    required: true,
    minLength: [3, 'Flight origins and destinations must be 3-character city/airport codes, e.g., NYC or LGA.'],
    maxLength: [3, 'Flight origins and destinations must be 3-character city/airport codes, e.g., NYC or LGA.']
  },
  departureDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  adultCount: {
    type: Number,
  },
  cabin: {
    type: String,
  },
  carrier: {
    type: String,
  },
  childCount: {
    type: Number,
  },
  seniorCount: {
    type: Number,
  }
});

export default mongoose.model('Flight', FlightSchema);