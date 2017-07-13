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
                .addClass("accommodation");
            var accommodationData = controller.getAccommodations(i);
            //for (key in accommodationData) {
            //    accommodation.append("<div class='row'>" + key + ": " + accommodationData[key] + "</div>");
            //}
            
            accommodation.append("<hr class='break'>");
            accommodation.append("<div id='bigInfo'>" + accommodationData["name"] + "</div>");
            accommodation.append("<div class='row'>" + accommodationData["address"] + "</div>");
            accommodation.append("<div>" + accommodationData["phone"] + "</div>")

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

                if (leg.originTerminal) { // some terminals are undefined?? I guess some airports call terminals by another name
                    portion.append("<div id='bigInfo'>" + leg.origin + " Terminal " + leg.originTerminal + "</div>");
                } else {
                    portion.append("<div id='bigInfo'>" + leg.origin + "</div>");
                }

                portion.append("<div id='bigInfo'>" + leg.departureTime.substring(11) + " on " + leg.departureTime.substring(0, 10) + "</div>");
                portion.append("<div class='row'>Total Flight Time: " + flightData.totalFlightTime + " minutes</div>");

                if (leg.destinationTerminal) {
                    portion.append("<div id='bigInfo'>Arriving at " + leg.destination + " Terminal " + leg.destinationTerminal + "</div>");
                } else {
                    portion.append("<div id='bigInfo'>Arriving at " + leg.destination + "</div>");
                }
                portion.append("<div id='bigInfo'>" + leg.arrivalTime.substring(11) + " on " + leg.arrivalTime.substring(0, 10) + "</div>");

            }
        }
        return portion;
    }

    return {
        init: function() {
            loadItineraries();
        },
    }
})();
