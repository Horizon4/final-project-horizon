import User from './model';
var crypto = require('crypto');

// User contructor
class user {
  constructor(user) {
    var salt = crypto.randomBytes(16).toString('base64');
    var hash = crypto.createHmac('sha512', salt);
    hash.update(user.password);
    this.username = user.username;
    this.salt = salt;
    this.saltedHash = hash.digest('base64');
  };
}

export const createUser = (req, res) => {
  var data = new user(req.body);
  console.log("got the data", data);

  return res.status(201);
}
