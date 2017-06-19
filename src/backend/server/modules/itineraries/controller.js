import Itinerary from './model';

export const createItinerary = (req, res) => {
  /*const flight1 = {'id':1}
  const flight2 = {'id':2}
  const arrayFlights = [flight1, flight2]
  const newItinerary = new Itinerary({ flights: arrayFlights}); */
  
  const ({ origin, destination, departureDate, returnDate, adultCount, childCount}) = req.body
  const newItinerary = new Itinerary({ origin, destination, departureDate, returnDate, adultCount, childCount });

  const newFlight = addFlight({ newItinerary.origin, newItinerary.destination, newItinerary.departureDate, newItinerary.returnDate,
    4, newItinerary.adultCount, "Cabin Type", "Carrier Type", newItinerary.childCount });

  newItinerary.flights.push(newFlight);

  newItinerary.save()
  .then((itinerary) => {
    return res.status(200).json({ itinerary });
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Trouble adding the itinerary'});
  })
}

export const addFlight = (req, res) => {
  const ({ origin, destination, departureDate, returnDate, price, adultCount, cabin, carrier, childCount}) = req.body
  const newFlight = new Flight({ origin, destination, departureDate, returnDate, price, adultCount, cabin, carrier, childCount });

  return newFlight; // how do you actually return this?

}
