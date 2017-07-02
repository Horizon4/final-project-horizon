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
      for (var j=0; j < accommodations.length; j++) {
        var object = {}
        object.flight = flights[i];
        object.accommodation = accommodations[j]
        result.push(object)
      }
    }
    return res.status(200).json({ result })
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'The itinerary Object does not exist'})
  })
}

export const selected = (req, res) => {
  var { selectedItinerary, username } = req.body;

  const select = new Itinerary({username, selectedItinerary })

  select.save()
  .then((itinerary) => {
    return res.status(200).json(itinerary);
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'Could not save the itinerary'});
  })
}

export const completedItinerary = (req, res) => {
  var { username } = req.body;

  Itinerary.find({'username': username})
  .then((itineraries) => {
    return res.status(200).json(itineraries);
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'No such user exists'})
  })
}
