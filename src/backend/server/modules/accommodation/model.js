import mongoose, { Schema } from 'mongoose';

const AccommodationSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  priceRating: {
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
  hotelName: {
    type: String,
    required: true,
  },
  hotelRating: {
    type: Number,
  }
});

export default mongoose.model('Accommodation', AccommodationSchema);
