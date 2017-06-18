import mongoose, { Schema } from 'mongoose';

const ItinerarySchema = new Schema({
  flights: {
    type: Array,
    required: true
  },
  stopoverCount: {
    type: Number,
  }
})
