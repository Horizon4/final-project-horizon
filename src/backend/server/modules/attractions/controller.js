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
    var attractionsPromises = [];
    performFocusSearch(req.body, (err, result) => {
      attractionsPromises = result;

      performSearch(req.body, 0, (err, result1) => {
        var attractionPromises1 = attractionsPromises.concat(result1);

        performSearch(req.body, 1, (err, result2) => {
          var attractionPromises2 = attractionPromises1.concat(result2);

          performSearch(req.body, 2, (err, result3) => {
            var attractionPromises3 = attractionPromises2.concat(result3);

            itineraryProcess.attractions = attractionPromises3;
            updateProcess(req.params.id, itineraryProcess, (err, result4) => {
              return res.status(200).json(itineraryProcess.attractions);
            })
          })
        })
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

function performFocusSearch(body, callback) {
  var attractions = [];
  var parameter = {
    query: body.destination,
    language: "en",
    type: [body.mainFocus]
  }

  textSearch(parameter, (err, attraction) => {
    if (err) throw err;
    for (var i = 0; i < 3; i++) {
      placeDetailsRequest({reference: attraction.results[i].reference}, (err, details) => {
        if(err) throw err;
        attractions.push(details);
        if (attractions.length === 2) {
          callback(null, attractions);
        }
      })
    }
  })
}

function performSearch(body, number, callback) {
  var bodyAttractions = body["attractions[]"];
  var attractions = [];

  var parameter = {
    query: body.destination,
    language: "en",
    type: [bodyAttractions[number]]
  }

  textSearch(parameter, (err, attraction) => {
    if (err) throw err;
    for (var i = 0; i < 2; i++) {
      placeDetailsRequest({reference: attraction.results[i].reference}, (err, details) => {
        if(err) throw err;
        attractions.push(details);
        if (attractions.length === 1) {
          callback(null, attractions);
        }
      })
    }
  })
}
