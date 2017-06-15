import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://127.0.0.1/horizon');
  mongoose.connection
    .once('open', () => console.log('Mongodb running'))
    .on('error', err => console.error(err));
}
