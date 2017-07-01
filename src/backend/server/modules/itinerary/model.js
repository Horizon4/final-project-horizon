import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
  username: {
    type: String,
    required: true
  },
  selectedItinerary: {
    type: {},
    required: true
  }
});

export default mongoose.model('Itinerary', itineraryProcess)
