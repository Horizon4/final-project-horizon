import Itinerary from './model';
import ItineraryProcess from '../itineraryProcess/model';
import User from '../users/model';


export const createItinerary = (req, res) => {

  var { itineraryProcessId } = req.body;

  ItineraryProcess.findById(itineraryProcessId)
  .then((itinerary) => {
    console.log('got the itinerary object');

    var flights = itinerary.flights;
    var accommodations = itinerary.accommodations;

    console.log(flights, " Flights is ");
    console.log(accommodations, " accommodations is ");
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'The itinerary Object does not exist'})
  })
}
