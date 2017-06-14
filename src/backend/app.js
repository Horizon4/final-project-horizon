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


https.createServer(app).listen(3000, function () {
    console.log('HTTPS on port 3000');
});
