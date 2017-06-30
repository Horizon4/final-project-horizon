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
  var Itinerary;
  const { price, adultCount, cabin, carrier, childCount, stopovers, stopoversCount } = req.body

  ItineraryProcess.findById(req.params.id)
  .then((itinerary) => {
    Itinerary = itinerary
    var date = itinerary.departureDate;
    var origin = itinerary.origin;
    var destination = itinerary.destination;
    var ItineraryProcessID = req.params.id;

    const departureFlight = new Flight({ origin, destination, date, price, adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

    Itinerary.flightsInfo.push(departureFlight);
    return departureFlight.save();
  })
  .then((flight) => {
    if ( typeof Itinerary.returnDate !== 'undefined' && Itinerary.returnDate) {
      var date = Itinerary.returnDate;
      var origin = Itinerary.destination;
      var destination = Itinerary.origin;
      var ItineraryProcessID = req.params.id;

      const returnFlight = new Flight({ origin, destination, date, price, adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

      Itinerary.flightsInfo.push(returnFlight);
      return returnFlight.save();
    } else {
      return Itinerary.update();
    }
  })
  .then((flight) => {
    // do the findFlights steps here
    return ItineraryProcess.update({'_id': req.params.id}, Itinerary)
  })
  .then((itinerary) => {
    res.status(200).json(itinerary)
  })
  .catch((err) => {
    return res.status(500);
  })
}
