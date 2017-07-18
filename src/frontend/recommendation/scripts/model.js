var model = (function() {
    var itineraryList;

    /** Repackage flight data **/
    function getFlights(itinerary) {
        var flightData = itinerary.flight;
        var result = {};

        if (flightData === undefined) {
            alert("model.js: It looks like you're missing flight data. Something definitely broke.")
            return {};
        }

        // Repackage flight data
        result.totalPrice = flightData.saleTotal;
        result.departure = {
            totalFlightTime: flightData.slice[0].duration,
            segment: getFlightSegments(flightData.slice[0].segment),
        };
        result.return = {
            totalFlightTime: flightData.slice[1].duration,
            segment: getFlightSegments(flightData.slice[1].segment),
        };

        return result;
    }
    /** Repackage flight segments data **/
    function getFlightSegments(segments) {
        var result = [];
        for (var i = 0; i < segments.length; i++) {
            result.push({
                flightNo: segments[i].flight.carrier + segments[i].flight.number,
                leg: getFlightLegs(segments[i].leg),
            });
        }
        return result;
    }
    /** Repackage flight legs data **/
    function getFlightLegs(legs) {
        result = [];
        for (var i = 0; i < legs.length; i++) {
            result.push({
                aircraft: legs[i].aircraft,
                departureTime: legs[i].departureTime,
                arrivalTime: legs[i].arrivalTime,
                origin: legs[i].origin,
                originTerminal: legs[i].originTerminal,
                destination: legs[i].destination,
                destinationTerminal: legs[i].destinationTerminal,
            });
        }
        return result;
    }
    /** Repackage accommodation data **/
    function getAccommodations(itinerary) {
        accommodationData = itinerary.accommodation.result;

        if (accommodationData === undefined) {
            alert("model.js: It looks like you're missing accommodation data. Something definitely broke.")
            return {};
        }

        // Repackage accommodation data
        var result = {
            address: accommodationData.formatted_address,
            phone: accommodationData.formatted_phone_number,
            name: accommodationData.name,
            website: accommodationData.website,
            rating: accommodationData.rating,
        };

        return result;
    }
    /** Repackage attraction data **/
    function getAttractions(itinerary) {
        var result = [];

        if (itinerary.attractions === undefined) {
            alert("model.js: It looks like you're missing attractions data. Try clearing your database and try again.")
            return result;
        }

        // Repackage attraction data
        for (var i = 0; i < itinerary.attractions.length; i++) {
            var attractionData = itinerary.attractions[i].result;

            result.push({
                address: attractionData.formatted_address,
                phone: attractionData.formatted_phone_number,
                name: attractionData.name,
                website: attractionData.website,
                rating: attractionData.rating,
            });
        };

        return result;
    }

    return {
        init: function() {

        },
        getItineraries: function(city) {
            // Attepmt to get recommended itineraries
            var result = $.ajax({
                url: "/api/getRecommendations/" + city,
                type: 'GET',
                success: function(data) {
                    // Save recommended itineraries
                    model.setItineraryList(data);
                    // Display recommended itineraries
                    controller.showItineraries();
                },
                error: function() {
                    // No itineraries found
                    controller.noItinerariesFound();
                }
            });
        },

        setItineraryList: function(data) {
            itineraryList = [];
            for (var i = 0; i < data.length; i++) {
                var itinerary = JSON.parse(data[i].selectedItinerary);
                itinerary.rating = data[i].rating;
                itinerary.votes = data[i].numberOfRatings;
                itineraryList.push(itinerary);
            }
        },

        getItineraryLength: function() {
            return itineraryList.length;
        },
        getItinerary: function(idx) {
            return {
                flights: getFlights(itineraryList[idx]),
                accommodation: getAccommodations(itineraryList[idx]),
                attractions: getAttractions(itineraryList[idx]),
                rating: Math.round(itineraryList[idx].rating),
                votes: itineraryList[idx].votes,
            };
        }
    }
})();
