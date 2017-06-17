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
});

export default mongoose.model('Itinerary', itinerarySchema)
