import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
  itineraryid: {
    type: Number,
    unique: true,
    required: true
  },
  flights: {
    type:[Schema.Types.ObjectId],
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
