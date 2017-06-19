import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
  flights: {
    type:[{}],
    required: false
  }
  /* stopOvers: {
    type: [String],
  } */
  stopoverCount: {
    type: Number,
  }
});

export default mongoose.model('Itinerary', itinerarySchema)
