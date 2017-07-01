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

export const createAccommodation = (req, res) => {
  const { address, priceRating, checkin, checkout, hotelName, hotelRating } = req.body;
  const newAccommodation = new Accommodation({ address, priceRating, checkin, checkout, hotelName, hotelRating });

  newAccommodation.save()
  .then((accommodation) => {
    return res.status(200).json({ accommodation });
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Missing required parameter' })
  })
}

export const getAccommodation = (req, res) => {
  ItineraryProcess.findById(req.params.id)
  .then((itinerary) => {
    performSearch(itinerary.destination, (err, result) => {
      return res.status(200).json(result);
    })
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Failed to find any accommodations' });
  })
}

function performSearch(dest, callback) {
  var parameter = {
    query: "lodging in tokyo"
  }

  var accommodations = [];
  textSearch(parameter, (err, accommodation) => {
    if (err) throw err;
    for (var i = 0; i < 10; i++) {
      placeDetailsRequest({reference: accommodation.results[i].reference}, (err, details) => {
        if(err) throw err;
        accommodations.push(details);
        if (accommodations.length == 10) {
          callback(null, accommodations);
        }
      })
    }
  })
}
