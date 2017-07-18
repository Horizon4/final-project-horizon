$(document).ready(function(){
    controller.init();
    view.init();

});

var view = (function() {

    function loadItineraries() {
        controller.getItineraries("completed");
        controller.getItineraries("incomplete");
    }

    function accordionButtons() {
        var acc = document.getElementsByClassName("accordion");
        for (var i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
            this.classList.toggle("active");
            var itinerary = this.nextElementSibling;
            if (itinerary.style.maxHeight){
              itinerary.style.maxHeight = null;
              //itinerary.style.padding = "0px 15px";
            } else {
              itinerary.style.maxHeight = itinerary.scrollHeight + "px";
              //itinerary.style.padding = "10px 15px";
            } 
          }
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

        for (var i = 0; i < flightData.segment.length; i++) {
            var segment = flightData.segment[i];
            portion.append("<div class='bigInfo' style='margin-top:10px'>" + portionName + " Flight " + segment.flightNo + " From:" + "</div>");

            for (var j = 0; j < segment.leg.length; j++) {
                var leg = segment.leg[j];
                if ((leg.originTerminal) && (leg.destinationTerminal)){
                    portion.append("<div class='bigInfo'>" + leg.origin + " Terminal " + leg.originTerminal + ", to " + leg.destination + " Terminal " + leg.destinationTerminal + "</div>");
                } else if (leg.originTerminal) {
                    portion.append("<div class='bigInfo'>" + leg.origin + " Terminal " + leg.originTerminal + ", to " + leg.destination + "</div>");
                } else if (leg.destinationTerminal) {
                    portion.append("<div class='bigInfo'>" + leg.origin + ", to " + leg.destination + " Terminal " + leg.destinationTerminal + "</div>");
                } else {
                    portion.append("<div class='bigInfo'>" + leg.origin + ", to " + leg.destination + "</div>");
                }
                portion.append("<div class='row'>Departing: " + leg.departureTime.substring(11) + " on " + leg.departureTime.substring(0, 10) + "</div>");
                portion.append("<div class='row'>Arriving: " + leg.arrivalTime.substring(11) + " on " + leg.arrivalTime.substring(0, 10) + "</div>");

            }
        }

        portion.append("<div class='row'>Total Flight Time: " + flightData.totalFlightTime + " minutes</div>");
        portion.append("<hr class='break' width='88%'>");
        return portion;
    }

    function continueItinerary() {
        var idx = $(this).data("idx");

        controller.continueItinerary(idx);
    }

    function recommendItinerary() {
        var idx = $(this).parent().data("idx");
        controller.recommendItinerary(idx);
    }

    return {
        init: function() {
            $("#main_wrapper").tabs();
            loadItineraries();
            accordionButtons();
        },

        insertCompletedItinerary: function(data, idx) {
            var itineraryList = $("#complete");

            var itinerary = $("<div></div>").addClass("completeItinerary").data("idx", idx);

            var recommendButton = $("<button type='button'>Recommend</button>").click(recommendItinerary);
            itinerary.append(recommendButton);

            // Flights
            itinerary.append(createFlight(data.flights));

            // Accommodations
            var accommodation = $("<div></div>")
                .addClass("accommodation")
                .append("<div class='row title'>Staying at: </div>");
            var accommodationData = data.accommodation;

            accommodation.append("<div class='bigInfo'>" + accommodationData["name"] + "</div>");
            accommodation.append("<div class='row'>" + accommodationData["address"] + "</div>");
            accommodation.append("<div>Phone: " + accommodationData["phone"] + "</div>");
            accommodation.append("<div class='row'>" + accommodationData["rating"] + " stars </div>");

            accommodation.append("<hr class='break' width='80%'>");
            itinerary.append(accommodation);

            // Attractions
            var attractions = $("<div></div>")
                .addClass("attractions");

            for (var i = 0; i < data.attractions.length; i++){
                var attractionsData = data.attractions[i];

                attractions.append("<div class='bigInfo'>" + attractionsData["name"] + "</div>");
                attractions.append("<div class='row'>" + attractionsData["address"] + "</div>");
                attractions.append("<div>Phone: " + attractionsData["phone"] + "</div>");
                attractions.append("<hr class='break' width='73%'>");
                itinerary.append(attractions);

            }
            itineraryList.append("<button class='accordion'>Itinerary " + data.flights.departure.segment[0].leg[0].departureTime.substring(0, 10) + "</button>");
            itineraryList.append(itinerary);
            accordionButtons();
        },
        insertIncompleteItinerary: function(data, idx) {
            var itineraryList = $("#incomplete");

            var itinerary = $("<div></div>")
                .addClass("itinerary")
                .data("idx", idx)
                .click(continueItinerary);

            itinerary.append("<div class='row'>From " + data["origin"] + " to " + data["destination"] + "</div>");
            itinerary.append("<div class='row'>Leaving on: " + data["departureDate"] + "</div>");
            itinerary.append("<div class='row'>Returning on: " + data["returnDate"] + "</div>");
            itinerary.append("<div class='row'>$" + data["budget"] + " budget</div>");


            itineraryList.append(itinerary);
        }
    }
})();
