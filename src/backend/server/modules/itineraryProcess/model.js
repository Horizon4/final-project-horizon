import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
  username: {
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
  price: {
    type: Number,
    required: true
  },
  flightsInfo: {
    type: [{}],
    required: false
  },
  flights: {
    type:[{}],
<<<<<<< HEAD
  },
  price: {
    type: Number,
    required: true
=======
    required: false
>>>>>>> d32d3e63bf78625700293aceee32b5380f40acac
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
