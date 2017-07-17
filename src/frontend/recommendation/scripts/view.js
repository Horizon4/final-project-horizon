$(document).ready(function(){
    controller.init();
    view.init();
});

var view = (function() {
    var itineraryList = $("#itineraryList");

    function exploreDestination(e) {
        e.preventDefault();

        var destination = $("#origin").val();
        controller.getItineraries(destination);
    }

    function loadItineraries() {

    }

    return {
        init: function() {
            $("#explore").click(exploreDestination);
        },
        noItinerariesFound: function() {
            $(itineraryList).html('<div id="noneFound">There does not appear to be any recommended itineraries for this city. Try a different city or <a href="/search">create a new itinerary!</a></div>');
        },
        showItineraries: function(data) {
            console.log($(itineraryList).html(), data);
        }
    }
})();
