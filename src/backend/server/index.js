import express from 'express';
import dbConfig from './config/db';
var Promise = require("bluebird");
import middlewareConfig from './config/middlewares';
import { UserRoutes } from './modules/index';
import { ItineraryRoutes } from './modules/index'
const app = express();

// DATABASE
dbConfig();

//Middleware
middlewareConfig(app);

app.use('/api', [UserRoutes, ItineraryRoutes]);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/../../frontend"));

// app.get('*', function (req, res, next) {
//     res.redirect('/index.html');
// });

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
