import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
  username: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  selectedItinerary: {
    type: {},
    required: true
  },
  recommendations: {
    type: Array
  },
  numberOfRecommendations: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  numberOfRatings: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Itinerary', itinerarySchema)
