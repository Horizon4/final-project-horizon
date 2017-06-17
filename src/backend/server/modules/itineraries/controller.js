import Flight from './model';

export const createFlight = (req, res) => {
  const { origin, destination, departureDate, returnDate } = req.body;
  const newFlight = new Flight({ origin, destination, departureDate, returnDate });

  newFlight.save()
  .then((flight) => {
    return res.status(201).json({ flight });
  })
  .catch((err) => {
    return res.status(500).json({ error: err, message: 'Error with creating a flight' })
  })
}

export const getAllFlights = (req, res) => {
  Flight.find()
  .then((flight) => {
    return res.status(200).json({ flight });
  })
  .catch((err) => {
    return res.status(500).json({ error: err, message: 'Error with creating a flight' })
  })
}
// var https = require('https')
// var app = express()
//
// var options = {
//   host: 'https://www.googleapis.com/',
//   path: 'qpxExpress/v1/trips/search?keys=AIzaSyDzCkC6l70Bep5IM2X_K3H09mQ0H1JbhOo',
//   method: 'POST'
//   header:
//   {
//     'request': {
//       'passengers': {
//         'adultCount': 1
//       },
//       'slice': [
//         {
//           'origin': 'BOS'
//           'destination': 'LAX'
//           'date': '2017-07-01'
//         },
//         {
//           'origin': 'LAX'
//           'destination': 'BOS'
//           'date': '2017-07-05'
//         }
//       ]
//     }
//   }
// }
//
// https.request(options, (res) => {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function(chunk) {
//     console.log('BODY: ' + chunk)
//   })
// }).end();
