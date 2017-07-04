var model = (function() {

    var itineraryList;

    function getGeneratedItineraries() {
        // Get itineraryProcessId
        var itineraryProcessID = Cookies.getJSON("itineraryID");

        // Get list of itineraries
        var result = $.ajax({
            url: "/api/createItinerary/",
            type: 'POST',
            data: {"itineraryProcessId": itineraryProcessID},
            async: false,
            success: function(data) {

            },
        });

        // Check for error
        if (result.status != 200) {
            alert("Oops, something broke!");
        }

        // Store itinerary list
        itineraryList = JSON.parse(result.responseText).result;
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

    return {
        init: function() {
            getGeneratedItineraries();
        },

        getItinerary: function(idx) {
            return (idx === undefined) ? itineraryList : itineraryList[idx];
        },
        getNumItineries: function() {
            return itineraryList.length;
        },
        getFlights: function(idx) {
            var flightData = itineraryList[idx].flight;
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
        },
        getAccommodations: function(idx) {
            accommodationData = itineraryList[idx].accommodation.result;

            // Repackage accommodation data
            var result = {
                address: accommodationData.formatted_address,
                phone: accommodationData.formatted_phone_number,
                name: accommodationData.name,
                website: accommodationData.website,
                rating: accommodationData.rating,
            };

            return result;
        },

        selectItinerary: function(idx) {
            // Select itinerary
            var result = $.ajax({
                url: "/api/selected",
                type: 'PUT',
                data: {"username": Cookies.getJSON("username"),
                    "selectedItinerary": JSON.stringify(itineraryList[idx]),
                },
                async: false,
                success: function(data) {
                    alert("Itinerary Saved!");
                    // Redirect to view
                    window.location.href = "/view";
                },
                error: function(data) {
                    console.log(data);
                }
            });

            return (result.status == 200);
        }
    }
})();
