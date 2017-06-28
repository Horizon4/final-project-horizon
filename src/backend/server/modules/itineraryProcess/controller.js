import ItineraryProcess from './model';
import Flight from '../flight/model';
import User from '../users/model';

export const createItinerary = (req, res) => {
  var { username, origin, destination, departureDate, returnDate, price } = req.body

  const newItinerary = new ItineraryProcess({ username, origin, destination, departureDate, returnDate, price });

  // check user is valid
  User.findOne({'username': username})
  .then((user) => {
    return newItinerary.save();
  })
  .then((itinerary) => {
    return res.status(200).json(itinerary);
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Missing required parameter'});
  })
}

export const addFlight = (req, res) => {

  // var date = departureDate;
  //
  // const departureFlight = new Flight({ origin, destination, date, price,
  //   adultCount, cabin, carrier, childCount, stopovers, stopoversCount });
  //
  // newItinerary.flights.push(departureFlight);
  //
  // if ( typeof returnDate !== 'undefined' && returnDate) {
  //   date = returnDate;
  //   var tmp = origin;
  //   origin = destination;
  //   destination = tmp;
  //
  //   const returnFlight = new Flight({ origin, destination, date, price,
  //     adultCount, cabin, carrier, childCount, stopovers, stopoversCount });
  //
  //   newItinerary.flights.push(returnFlight);
  // }

  const { origin, destination, departureDate, price, adultCount,
          cabin, carrier, childCount, stopovers, stopoversCount } = req.body

  const newFlight = new Flight({ origin, destination, departureDate, price,
    adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

  ItineraryProcess.findById(req.params.id)
  .then((itinerary) => {
    itinerary.flights.push(newFlight);
    newFlight.save()
  })
  .then((flight) => {
    return res.status(200).json(flight);
  })
  .catch((err) => {
    return res.status(500);
  })
}
