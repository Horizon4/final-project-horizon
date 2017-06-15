import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  saltedHash: {
    type: String,
    required: true
  }
});

export default mongoose.model('User', UserSchema)
