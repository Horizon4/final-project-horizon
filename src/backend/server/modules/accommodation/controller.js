import Accommodation from './model';
import ItineraryProcess from '../itineraryProcess/model';

var https = require('https');
var querystring = require('querystring');
var TextSearch = require('googleplaces/lib/TextSearch.js');
var apiKey = 'AIzaSyDzCkC6l70Bep5IM2X_K3H09mQ0H1JbhOo';
var outputFormat = 'json';
var textSearch = new TextSearch(apiKey, outputFormat);

export const getAccommodation = (req, res) => {
  console.log(req.params.id);
  ItineraryProcess.findById(req.params.id)
  .then((itinerary) => {
    var parameters = {
      query: "lodging in " + itinerary.destination
    }

    textSearch(parameter)
    .then((output) => {
      return res.status(200).json({ output });
    })
    .catch((err) => {
      return res.status(500).json({ error: true, message: 'Text search must not return 0 results.' });
    })
  })
  .catch((err) => {
    return res.status(500).json({ error: err, message: 'No itinerary found by that ID' });
  })
}
