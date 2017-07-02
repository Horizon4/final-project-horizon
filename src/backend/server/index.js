import express from 'express';
import dbConfig from './config/db';
var Promise = require("bluebird");
import middlewareConfig from './config/middlewares';
import { UserRoutes, FlightRoutes, ItineraryProcessRoutes, ItineraryRoutes, AccommodationRoutes } from './modules/index';

const app = express();

// DATABASE
dbConfig();

//Middleware
middlewareConfig(app);

app.use('/api', [UserRoutes, FlightRoutes, ItineraryProcessRoutes, ItineraryRoutes, AccommodationRoutes]);


const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/../../frontend"));


app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
