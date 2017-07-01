import Itinerary from './model';
import ItineraryProcess from '../itineraryProcess/model';
import User from '../users/model';


export const createItinerary = (req, res) => {

  var { itineraryProcessId } = req.body;

  ItineraryProcess.findById(itineraryProcessId)
  .then((itinerary) => {

    var flights = itinerary.flights;
    var accommodations = itinerary.accommodations;
    var result = [];

    for (var i=0; i <flights.length; i++){
      var object = {}
      object.flight = flights[i];
      result.push(object)
    }
    return res.status(200).json({ result })
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'The itinerary Object does not exist'})
  })
}
