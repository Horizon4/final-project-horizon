import Accommodation from './model';
import ItineraryProcess from '../itineraryProcess/model';

var https = require('https');
var querystring = require('querystring');
var TextSearch = require('googleplaces/lib/TextSearch.js');
var PlaceDetailsRequest = require('googleplaces/lib/PlaceDetailsRequest.js');
var apiKey = 'AIzaSyCK0a0EwO1pjYv937SteGVquf7Mp-SNODg';
var outputFormat = 'json';
var textSearch = new TextSearch(apiKey, outputFormat);
var placeDetailsRequest = new PlaceDetailsRequest(apiKey, outputFormat);

export const findAccommodation = (req, res) => {
  ItineraryProcess.findById(req.params.id)
  .then((itinerary) => {
    performSearch(req.body.destination, (err, result) => {
      itinerary.accommodations = result;

      updateProcess (req.params.id, itinerary, (err, result) => {
        return res.status(200).json(result)
      })
    })
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Failed to find any accommodations' });
  })
}

function updateProcess(id, itineraryProcess, callback) {

   ItineraryProcess.update({'_id': id}, itineraryProcess)
   .then((itinerary) => {
     callback(null, itinerary)
   })
   .catch((err) => {
     throw err;
   })
}


function performSearch(dest, callback) {
  var parameter = {
    query: "lodging in " + dest
  }

  var accommodations = [];
  textSearch(parameter, (err, accommodation) => {
    if (err) throw err;
    for (var i = 0; i < 10; i++) {
      placeDetailsRequest({reference: accommodation.results[i].reference}, (err, details) => {
        if(err) throw err;
        accommodations.push(details);
        if (accommodations.length == 5) {
          callback(null, accommodations);
        }
      })
    }
  })
}
