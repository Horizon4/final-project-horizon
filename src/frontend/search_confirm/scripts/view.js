$(document).ready(function() {
    controller.init();
    view.init();
});

var view = (function() {

    function selectItinerary() {
        var success = controller.selectItinerary($(this).data("idx"));
        if (!success) {
            alert("Oops, something broke!");
        }
    }

    function loadItineraries() {
        var itineraryList = $("#itinerary_list");
        itineraryList.html("");

        for (var i = 0; i < controller.getNumItineries(); i++) {
            var itinerary = $("<div></div>").addClass("itinerary").data("idx", i).click(selectItinerary);

            // Flights
            itinerary.append(createFlight(controller.getFlights(i)));

            // Accommodations
            var accommodation = $("<div></div>")
                .addClass("accommodation")
                .append("<div class='row title'>Accommodation</div>");
            var accommodationData = controller.getAccommodations(i);
            for (key in accommodationData) {
                accommodation.append("<div class='row'>" + key + ": " + accommodationData[key] + "</div>");
            }
            itinerary.append(accommodation);

            itineraryList.append(itinerary);
        }
    }
    function createFlight(flightData) {
        var flight = $("<div></div>").addClass("flight");

        flight.append(createFlightPortion(flightData.departure, "Departure"));
        flight.append(createFlightPortion(flightData.return, "Return"));

        return flight;
    }

    function createFlightPortion(flightData, portionName) {
        var portion = $("<div></div>").addClass(portionName.toLowerCase());
        //portion.append("<div class='row title'>" + portionName + " Flight</div>");
        //portion.append("<div class='row title'>Depart From</div>");
 
        for (var i = 0; i < flightData.segment.length; i++) {
            var segment = flightData.segment[i];
            portion.append("<div class='row'>" + portionName + " Flight " + segment.flightNo + " From:" + "</div>");

            for (var j = 0; j < segment.leg.length; j++) {
                var leg = segment.leg[j];
                portion.append("<div id='bigInfo'>" + leg.origin + " Terminal " + leg.originTerminal + "</div>");
                portion.append("<div id='bigInfo'>" + leg.departureTime.substring(11) + " on " + leg.departureTime.substring(0, 10) + "</div>");
                portion.append("<div class='row'>Total Flight Time: " + flightData.totalFlightTime + " minutes</div>");
                portion.append("<div id='bigInfo'>Arriving at " + leg.destination + ", Terminal " + leg.destinationTerminal + "</div>");
                portion.append("<div id='bigInfo'>" + leg.arrivalTime.substring(11) + " on " + leg.arrivalTime.substring(0, 10) + "</div>");

            }
        }


        portion.append("<hr class='break'>");
        return portion;
    }

    return {
        init: function() {
            loadItineraries();
        },
    }
})();
