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


    return {
        init: function() {

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
                    itineraryList[type].push(JSON.parse(data[i].selectedItinerary));
                }
            } else {
                itineraryList[type] = data;
            }
        },

        getCompletedItineraryLength: function() {
            return itineraryList.completed.length;
        },
        getCompletedItinerary: function(idx) {
            return {
                flights: getFlights(itineraryList.completed[idx]),
                accommodation: getAccommodations(itineraryList.completed[idx]),
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
        }
    }
})();
