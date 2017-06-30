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

export default mongoose.model('Itinerary', itinerarySchema)
