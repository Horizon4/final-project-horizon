$(document).ready(function(){
    controller.init();
    view.init();
});

var view = (function() {

    function loadItineraries() {
        controller.getItineraries("completed");
        controller.getItineraries("incomplete");
    }


    function createFlight(flightData) {
        var flight = $("<div></div>").addClass("flight");

        flight.append(createFlightPortion(flightData.departure, "Departure"));
        flight.append(createFlightPortion(flightData.return, "Return"));

        return flight;
    }
    function createFlightPortion(flightData, portionName) {
        var portion = $("<div></div>").addClass(portionName.toLowerCase());
        portion.append("<div class='row title'>" + portionName + " Flight</div>");

        for (var i = 0; i < flightData.segment.length; i++) {
            var segment = flightData.segment[i];
            portion.append("<div class='row'>Flight Number: " + segment.flightNo + "</div>");

            for (var j = 0; j < segment.leg.length; j++) {
                var leg = segment.leg[j];
                portion.append("<div class='row'>From " + leg.origin + ", Terminal " + leg.originTerminal + "</div>");
                portion.append("<div class='row'>Departing " + leg.departureTime + "</div>");
                portion.append("<div class='row'>To " + leg.destination + ", Terminal " + leg.destinationTerminal + "</div>");
                portion.append("<div class='row'>Arriving " + leg.arrivalTime + "</div>");
            }
        }

        portion.append("<div class='row'>Total Flight Time: " + flightData.totalFlightTime + " minutes</div>");

        return portion;
    }

    function continueItinerary() {
        var idx = $(this).data("idx");

        controller.continueItinerary(idx);
    }

    return {
        init: function() {
            $("#main_wrapper").tabs();
            loadItineraries();
        },
        insertCompletedItinerary: function(data) {
            var itineraryList = $("#complete");

            var itinerary = $("<div></div>").addClass("itinerary");

            // Flights
            itinerary.append(createFlight(data.flights));

            // Accommodations
            var accommodation = $("<div></div>")
                .addClass("accommodation")
                .append("<div class='row title'>Accommodation</div>");
            var accommodationData = data.accommodation;
            for (key in accommodationData) {
                accommodation.append("<div class='row'>" + key + ": " + accommodationData[key] + "</div>");
            }
            itinerary.append(accommodation);

            itineraryList.append(itinerary);

        },
        insertIncompleteItinerary: function(data, idx) {
            var itineraryList = $("#incomplete");

            var itinerary = $("<div></div>")
                .addClass("itinerary")
                .data("idx", idx)
                .click(continueItinerary);

            for (key in data) {
                itinerary.append("<div class='row'>" + key + ": " + data[key] + "</div>");
            }

            itineraryList.append(itinerary);
        }
    }
})();
