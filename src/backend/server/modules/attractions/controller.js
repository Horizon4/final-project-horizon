import ItineraryProcess from '../itineraryProcess/model';

var https = require('https');
var querystring = require('querystring');
var TextSearch = require('googleplaces/lib/TextSearch.js');
var PlaceDetailsRequest = require('googleplaces/lib/PlaceDetailsRequest.js');
var apiKey = 'AIzaSyBwQgLyXfNRVDIlIKynDS7Sj_u9EU95qSA';
var outputFormat = 'json';
var textSearch = new TextSearch(apiKey, outputFormat);
var placeDetailsRequest = new PlaceDetailsRequest(apiKey, outputFormat);


export const findAttraction = (req, res) => {
  ItineraryProcess.findById(req.params.id)
  .then((itineraryProcess) => {
    performSearch(req.body, (err, result) => {
      var temp = result;
      itineraryProcess.attractions = result;

      updateProcess (req.param.id, itineraryProcess, (err, result) => {
        return res.status(200).json(temp);
      })
    })
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Failed to find any attractions'});
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

function performSearch(body, callback) {
  var attractions = [];
  var parameter;

  if (body.attractions.length === 0){
    parameter = {
      query: body.destination + "point of interest",
      language: "en"
    }
  } else {
    parameter = {
      query: body.destination,
      language: "en",
      type: [body.attractions[0]]
    }
  }

  textSearch(parameter, (err, attraction) => {
    if (err) throw err;
    for (var i = 0; i < 6; i++) {
      placeDetailsRequest({reference: attraction.results[i].reference}, (err, details) => {
        if(err) throw err;
        attractions.push(details);
        if (attractions.length == 5) {
          callback(null, attractions);
        }
      })
    }
  })
}
