import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
  user: {
    type: String,
    required: true
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
  flights: {
    type:[{}],
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

export default mongoose.model('ItineraryProcess', itinerarySchema)
