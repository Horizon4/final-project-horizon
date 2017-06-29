import Flight from './model';
import ItineraryProcess from '../itineraryProcess/model';

var https = require('https');
var querystring = require('querystring');
var qpxAPI = require('qpx-express');

var apiKey = 'AIzaSyDzCkC6l70Bep5IM2X_K3H09mQ0H1JbhOo';
var qpx = new qpxAPI(apiKey);

export const createFlight = (req, res) => {
  const { itineraryProcessID, origin, destination, date, price, adultCount, cabin, carrier, childCount, stopovers, stopoversCount } = req.body;

  const newFlight = new Flight({ itineraryProcessID, origin, destination, date, price, adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

  newFlight.save()
  .then((flight) => {
    return res.status(200).json({ flight });
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Missing required parameter' })
  })
}

export const getFlight = (req, res, next) => {
  ItineraryProcess.findById(req.params.id)
  .then((itinerary) => {
    req.stopoverCount = itinerary.stopoverCount
    req.flights = []
    for (var i = 0; i < itinerary.flightsInfo.length; i++) {
      req.flights.push(itinerary.flightsInfo[i])
    }
    next();
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Flight with ' + req.params.id + 'does not exist.' })
  })
}

export const buildFlightRequest = (req, res, next ) => {
  var body = {
    "request": {
        "passengers": {
          "adultCount": req.flights[0].adultCount,
          "childCount": req.flights[0].childCount,
          "seniorCount": req.flights[0].seniorCount
        },
        "slice": [],
        "maxPrice": 'CAD' + req.flights[0].price,
        "solutions": "50",
        "refundable": false,
      }
    };

  for (var i = 0; i < req.flights.length; i++) {
    body.request.slice.push({
      "origin": req.flights[i].origin,
      "destination": req.flights[i].destination,
      "date": req.flights[i].date, // YYYY-MM-DD
      "maxStops": req.stopoverCount,
      "preferredCabin": req.flights[i].cabin,
      "permittedCarrier": req.flights[i].carrier
    })
  }
  req.body = body;
  next();
}

export const findFlights = (req, res) => {
  console.log(req.body);
  qpx.getInfo(req.body, (err, flights) => {
    if (err) {
      console.log(err)
    } else {
      return res.status(200).json(flights);
    }
  })
}
