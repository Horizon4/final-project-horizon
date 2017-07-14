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

        if (result.length == 8 ){
          return res.status(200).json({ result });
        }
      }
    }
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'The itinerary Object does not exist'})
  })
}

export const selected = (req, res) => {
  var { selectedItinerary, username } = req.body;

  const select = new Itinerary({ username, selectedItinerary })

  select.save()
  .then((itinerary) => {
    return res.status(200).json(itinerary);
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'Could not save the itinerary'});
  })
}

export const completedItinerary = (req, res) => {
  var username  = req.params.username;

  Itinerary.find({'username': username})
  .then((itineraries) => {
    return res.status(200).json(itineraries);
  })
  .catch((err) => {
    return res.status(500).json({error: true, message: 'No such user exists'})
  })
}

export const updateRating = (req, res) => {
  var { itineraryId, rating } = req.body
  Itinerary.findById(itineraryId)
  .then((itinerary) => {
    var newNumberOfRatings = itinerary.numberOfRatings + 1
    var newRating = (itinerary.rating*itinerary.numberOfRatings + parseInt(rating))/newNumberOfRatings
    itinerary.rating = newRating
    itinerary.numberOfRatings = newNumberOfRatings
    itinerary.save()
    return res.status(200).json('OK');
  })
  .catch((err) => {
    return res.status(500).json({error: err, message: 'Failed to update rating'})
  })
}

export const updateRecommendations = (req, res) => {
  var { itineraryId, username } = req.body
  Itinerary.findById(itineraryId)
  .then((itinerary) => {
    var newNumberOfRecommendations = itinerary.numberOfRecommendations + 1
    itinerary.numberOfRecommendations = newNumberOfRecommendations
    itinerary.recommendations.push(username)
    itinerary.save()
    return res.status(200).json('OK');
  })
  .catch((err) => {
    return res.status(500).json({error: err, message: 'Failed to update recommendations'})
  })
}
