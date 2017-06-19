import mongoose, { Schema } from 'mongoose';

const ItinerarySchema = new Schema({
  flights: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  stopoverCount: {
    type: Number,
  }
})

export default mongoose.model('Itinerary', ItinerarySchema);
