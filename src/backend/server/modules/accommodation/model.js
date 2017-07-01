import mongoose, { Schema } from 'mongoose';

const AccommodationSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
    required: true,
  },
  hotelname: {
    type: String,
    required: true,
  },
  roomtype: {
    type: String,
    required: true,
  },
  amenities: {
    type: [],
  }
})
