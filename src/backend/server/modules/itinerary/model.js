import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
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
  flights: {
    type:[{}],
  },
  price: {
    type: Number,
    required: true
  },
  stopovers: {
    type: [String],
  },
  stopoverCount: {
    type: Number,
    default: 2
  }
});

export default mongoose.model('Itinerary', itinerarySchema)
