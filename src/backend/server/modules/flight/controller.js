import Flight from './model';
import Itinerary from '../itinerary/model';

var https = require('https');
var querystring = require('querystring');
var qpxAPI = require('qpx-express');

var apiKey = 'AIzaSyDzCkC6l70Bep5IM2X_K3H09mQ0H1JbhOo';
var qpx = new qpxAPI(apiKey);

export const createFlight = (req, res) => {
  const { origin, destination, departureDate, returnDate, price, adultCount,
          cabin, carrier, childCount, stopovers, stopoversCount } = req.body;
  const newFlight = new Flight({ origin, destination, departureDate,
    returnDate, price, adultCount, cabin, carrier, childCount, stopovers,
    stopoversCount });

  newFlight.save()
  .then((flight) => {
    return res.status(201).json({ flight });
  })
  .catch((err) => {
    return res.status(500).json({ error: err, message: 'Error with creating a flight' })
  })
}

export const getFlight = (req, res, next) => {
  Itinerary.findById(req.params.id)
  .then((itinerary) => {
    req.stopoverCount = itinerary.stopoverCount
    if (itinerary.flights.length == 1) {
      Flight.findById(itinerary.flights[0]["_id"])
        .then((flight) => {
          req.data = flight
          next();
        })
    } else {
      for (var i = 0; i < itinerary.flights.length; i++) {
        req.flights = []
        Flight.findById(itinerary.flights[i]["_id"])
        .then((flight) => {
          req.flights.push(flight)
        })
      }
      next();
    }
  })
  .catch((err) => {
    return res.status(500).json({ error: err, message: 'Error with getting flight' })
  })
}

export const getAllFlights = (req, res) => {
  Flight.find()
  .then((flights) => {
    return res.status(200).json({ flights });
  })
  .catch((err) => {
    return res.status(500).json({ error: err, message: 'Error with getting all flights' })
  })
}

export const buildOneWayFlightRequest = (req, res, next) => {
  var body = {
    "request": {
        "passengers": {
          "adultCount": req.flight.adultCount,
          "childCount": req.flight.childCount,
          "seniorCount": req.flight.seniorCount
        },
        "slice": [
          {
            "origin": req.flight.origin,
            "destination": req.flight.destination,
            "date": req.flight.departureDate, // YYYY-MM-DD
            "maxStops": req.stopoverCount,
            "preferredCabin": req.flight.cabin,
            "permittedCarrier": req.flight.carrier
          }
        ],
        "maxPrice": 'CAD' + req.flight.price,
        "solutions": "50"
      }
    };

  req.body = body;
  next();
}

export const buildRoundTripFlightRequests = (req, res, next ) => {
  var body = {
    "request": {
        "passengers": {
          "adultCount": req.flights.adultCount,
          "childCount": req.flight.childCount,
          "seniorCount": req.flight.seniorCount
        },
        "slice": [
          {
            "origin": req.flight.origin,
            "destination": req.flight.destination,
            "date": req.flight.departureDate, // YYYY-MM-DD
            "maxStops": req.stopoversCount,
            "preferredCabin": req.flight.cabin,
            "permittedCarrier": req.flight.carrier
          },
          {
            "origin": req.flight.destination,
            "destination": req.flight.origin,
            "date": req.flight.returnDate, // YYYY-MM-DD
            "maxStops": req.stopoversCount,
            "preferredCabin": req.flight.cabin,
            "permittedCarrier": req.flight.carrier
          }
        ],
        "maxPrice": 'CAD' + req.flight.price,
        "solutions": "50"
      }
    };

  req.body = body;
  next();
}

export const buildMultiCityFlightRequests = (req, res, next ) => {
  var body = {
    "request": {
        "passengers": {
          "adultCount": req.flights[0].adultCount,
          "childCount": req.flights[0].childCount,
          "seniorCount": req.flights[0].seniorCount
        },
        "slice": [],
        "maxPrice": 'CAD' + req.flights[0].price,
        "solutions": "50"
      }
    };

  for (var i = 0; i < req.flights.length; i++) {
    body.request.slice.push({
      "origin": req.flights[i].origin,
      "destination": req.flights[i].destination,
      "date": req.flights[i].departureDate, // YYYY-MM-DD
      "maxStops": req.stopoversCount,
      "preferredCabin": req.flights[i].cabin,
      "permittedCarrier": req.flights[i].carrier
    })
  }
}

export const findFlights = (req, res) => {
  qpx.getInfo(req.body, (err, flights) => {
    if (err) {
      console.log(err)
    } else {
      return res.status(200).json(flights);
    }
  })
}
