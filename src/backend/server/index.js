import express from 'express';
import dbConfig from './config/db';
var Promise = require("bluebird");
import middlewareConfig from './config/middlewares';
import { UserRoutes, ItineraryRoutes } from './modules/index';
const app = express();

// DATABASE
dbConfig();

//Middleware
middlewareConfig(app);

app.use('/api', [UserRoutes], [ItineraryRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
