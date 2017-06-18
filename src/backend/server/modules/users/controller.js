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

const checkPassword = (user, pass) => {
  var hash = crypto.createHmac('sha512', user.salt);
  hash.update(pass);
  var value = hash.digest('base64');
  return (user.saltedHash === value);
}

export const createUser = (req, res) => {
  var data = new user(req.body);
  const { username, salt, saltedHash } = data
  const newUser = new User({ username, salt, saltedHash });

  newUser.save()
  .then((user) => {
    return res.status(201).json({ user });
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Username already exists'})
  })
}

export const signInUser = (req,res) => {
  const { username, password } = req.body;

  User.findOne({'username': username})
  .then((user) => {
    console.log('Found the user');

    if (!checkPassword(user, password)) return res.status(401).json({message: 'Unauthorized'})

    return res.status(201).json({ user });
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'User does not exist'});
  })


}
