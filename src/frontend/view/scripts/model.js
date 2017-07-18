var model = (function() {
    var apiMap = {
        "completed": "completed",
        "incomplete": "uncompleted",
    }
    var itineraryList = {
        "completed": null,
        "incomplete": null,
    }

    /** Repackage flight data **/
    function getFlights(itinerary) {
        var flightData = itinerary.flight;
        var result = {};

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
        testAttractions (i) { //DEBUG
            return getAttractions(i);
        },
        getItineraries: function(type) {
            var result = $.ajax({
                url: "/api/" + apiMap[type] + "/" + Cookies.get("username"),
                type: 'GET',
                success: function(data) {
                    // Store list of itineraries
                    model.setItineraryList(data, type);

                    controller.loadItineraries(type);
                },
            });
        },
        setItineraryList: function(data, type) {
            if (type === "completed") {
                itineraryList[type] = [];
                for (var i = 0; i < data.length; i++) {
                    var itinerary = JSON.parse(data[i].selectedItinerary);
                    itinerary.id = data[i]._id;
                    itineraryList[type].push(itinerary);
                }
            } else {
                itineraryList[type] = data;
            }
        },

        debugGetItineraries: function() {
            return itineraryList;
        },

        getCompletedItineraryLength: function() {
            return itineraryList.completed.length;
        },
        getCompletedItinerary: function(idx) {
            return {
                flights: getFlights(itineraryList.completed[idx]),
                accommodation: getAccommodations(itineraryList.completed[idx]),
                attractions: getAttractions(itineraryList.completed[idx]),
            }
        },
        getIncompleteItineraryLength: function() {
            return itineraryList.incomplete.length;
        },
        getIncompleteItinerary: function(idx) {
            return {
                departureDate: itineraryList.incomplete[idx].departureDate,
                destination: itineraryList.incomplete[idx].destination,
                origin: itineraryList.incomplete[idx].origin,
                budget: itineraryList.incomplete[idx].price,
                returnDate: itineraryList.incomplete[idx].returnDate,
            }
        },

        continueItinerary: function(idx) {
            var itinerary = itineraryList.incomplete[idx];
            Cookies.set("itineraryID", itinerary._id);

            if (itinerary.flights.length === 0) {
                window.location.href = "/search_flights";
            } else if (itinerary.accommodations.length === 0) {
                window.location.href = "/search_accommodation";
            } else if (itinerary.attractions.length === 0) {
                window.location.href = "/search_attractions";
            } else {
                window.location.href = "/search_confirm";
            }
        },

        recommendItinerary: function(idx) {
            var result = $.ajax({
                url: "/api/updateRecommendations",
                data: {
                    username: Cookies.get("username"),
                    itineraryId: itineraryList.completed[idx].id,
                },
                type: 'PUT',
                success: function(data) {
                    alert("Itinerary recommended!");
                },
                error: function(data) {
                    console.log(data);
                }
            });
        },
        voteItinerary: function(idx, vote) {
            var result = $.ajax({
                url: "/api/updateRating",
                data: {
                    rating: vote,
                    itineraryId: itineraryList.completed[idx].id,
                },
                type: 'PUT',
                success: function(data) {
                },
                error: function(data) {
                    console.log(data);
                }
            });
        }

    }
})();
