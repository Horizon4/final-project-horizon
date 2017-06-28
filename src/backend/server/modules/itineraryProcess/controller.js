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

  const { price, adultCount, cabin, carrier, childCount, stopovers, stopoversCount } = req.body

  ItineraryProcess.findById(req.params.id)
  .then((itinerary) => {
    var date = itinerary.departureDate;
    var origin = itinerary.origin;
    var destination = itinerary.destination;
    var ItineraryProcessID = req.params.id;

    const departureFlight = new Flight({ ItineraryProcessID, origin, destination, date, price, adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

    itinerary.flightsInfo.push(departureFlight);
    return departureFlight.save()
  })
  .then((flight) => {
    return res.status(200).json(flight);
  })
  .catch((err) => {
    return res.status(500);
  })
}
