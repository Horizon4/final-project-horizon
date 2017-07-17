import mongoose, { Schema } from 'mongoose';

const itineraryProcessSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  departureDate: {
    type: String,
    required: true
  },
  returnDate: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  flightsInfo: {
    type: [{}],
    required: false
  },
  attractions: {
    type: [{}],
    required: false
  },
  accommodationsInfo: {
    type: [{}],
    required: false
  },
  flights: {
    type:[{}],
  },
  accommodations: {
    type: [{}],
    required: false
  },
  stopovers: {
    type: [String],
  },
  stopoverCount: {
    type: Number,
    default: 2
  }
});

export default mongoose.model('ItineraryProcess', itineraryProcessSchema)
