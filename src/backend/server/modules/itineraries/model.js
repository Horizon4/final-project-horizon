import mongoose, { Schema } from 'mongoose';

const FlightSchema = new Schema({
  flightID: {
    type: String,
    required: true,
    unique: true
  },
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
    type: String,
    required: true
  },
  returnDate: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  pricing: {
    type: Number,
    required: true
  },
  stopoversCount: {
    type: Number,
  },
  stopovers: {
    type: Array,
  }
});

export default mongoose.model('Flight', FlightSchema);
