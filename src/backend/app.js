var crypto = require('crypto');
var express = require('express');
var app = express();
var https = require('https');

var bodyParser = require('body-parser');


app.use(function (req, res, next){
  console.log("HTTPS request", req.method, req.url, req.body);
  return next();
});

app.use(function (req, res, next){
  console.log("HTTPS Response", res.statusCode);
});

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://localhost:27017/horizon';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});


https.createServer(app).listen(3000, function () {
  console.log('HTTPS on port 3000');
});
