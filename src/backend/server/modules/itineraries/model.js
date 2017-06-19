import mongoose, { Schema } from 'mongoose';

const itinerarySchema = new Schema({
  itineraryid: {
    type: Schema.Types.ObjectID,
    unique: true,
  /*  required: true*/
  },
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
