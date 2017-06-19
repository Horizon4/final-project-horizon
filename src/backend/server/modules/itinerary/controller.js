import Itinerary from './model';
import Flight from '../flight/model';

export const createItinerary = (req, res) => {
  /*const flight1 = {'id':1}
  const flight2 = {'id':2}
  const arrayFlights = [flight1, flight2]
  const newItinerary = new Itinerary({ flights: arrayFlights}); */

  var { origin, destination, departureDate, returnDate, price, adultCount,
          cabin, carrier, childCount, stopovers, stopoversCount } = req.body
  const newItinerary = new Itinerary({ origin, destination, departureDate,
                                        returnDate });
  var date = departureDate;
  const departureFlight = new Flight({ origin, destination, date, price,
    adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

  newItinerary.flights.push(departureFlight);

  if ( typeof returnDate !== 'undefined' && returnDate) {
    date = returnDate;
    var tmp = origin;
    origin = destination;
    destination = tmp;
    const returnFlight = new Flight({ origin, destination, date, price,
      adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

    newItinerary.flights.push(returnFlight);
  }

  newItinerary.save()
  .then((itinerary) => {
    return res.status(200).json({ itinerary });
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message:
                                  'Missing required parameter'});
  })
}

export const addFlight = (req, res) => {
  const { origin, destination, departureDate, price, adultCount,
          cabin, carrier, childCount, stopovers, stopoversCount } = req.body
  const newFlight = new Flight({ origin, destination, departureDate, price,
    adultCount, cabin, carrier, childCount, stopovers, stopoversCount });

  Itinerary.findById(req.params.id)
  .then((itinerary) => {
    itinerary.flights.push(newFlight);
    newFlight.save()
    .then((flight) => {
      return res.status(200).json(flight);
    })
  })
}
