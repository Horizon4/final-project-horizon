import Flight from './model';

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
  Flight.findById(req.params.id)
  .then((flight) => {
    req.data = flight;
    next();
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
          "adultCount": req.data.adultCount,
          "childCount": req.data.childCount,
          "seniorCount": req.data.seniorCount
        },
        "slice": [
          {
            "origin": req.data.origin,
            "destination": req.data.destination,
            "date": req.data.departureDate, // YYYY-MM-DD
            "maxStops": req.data.stopoversCount,
            "preferredCabin": req.data.cabin,
            "permittedCarrier": req.data.carrier
          }
        ],
        "maxPrice": 'CAD' + req.data.price,
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
          "adultCount": req.data.adultCount,
          "childCount": req.data.childCount,
          "seniorCount": req.data.seniorCount
        },
        "slice": [
          {
            "origin": req.data.origin,
            "destination": req.data.destination,
            "date": req.data.departureDate, // YYYY-MM-DD
            "maxStops": req.data.stopoversCount,
            "preferredCabin": req.data.cabin,
            "permittedCarrier": req.data.carrier
          },
          {
            "origin": req.data.destination,
            "destination": req.data.origin,
            "date": req.data.returnDate, // YYYY-MM-DD
            "maxStops": req.data.stopoversCount,
            "preferredCabin": req.data.cabin,
            "permittedCarrier": req.data.carrier
          }
        ],
        "maxPrice": 'CAD' + req.data.price,
        "solutions": "50"
      }
    };

  req.body = body;
  next();
}

export const buildMultiCityFlightRequests = (req, res, next ) => {
  //To be implemented.
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
