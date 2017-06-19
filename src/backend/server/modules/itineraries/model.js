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
    type: Date,
    required: true
  },
  returnDate: {
    type: Date,
    required: true
  },
  adultCount: {
    type: Number
  },
  childCount: {
    type: Number
  },
  flights: {
    type:[{}],
    required: false
  },
  stopOvers: {
    type: [String],
  }
  stopoverCount: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Itinerary', itinerarySchema)
