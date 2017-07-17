var controller = (function() {

    return {
        init: function() {

        },
        getItineraries: function(type) {
            model.getItineraries(type);
        },
        loadItineraries: function(type) {
            var cleanedUpData;
            if (type === "completed") {
                for (var i = 0; i < model.getCompletedItineraryLength(); i++) {
                    view.insertCompletedItinerary(model.getCompletedItinerary(i));
                }
            } else if (type === "incomplete") {
                for (var i = 0; i < model.getIncompleteItineraryLength(); i++) {
                    view.insertIncompleteItinerary(model.getIncompleteItinerary(i));
                }
            } else {
                alert("Something broke! Invalid type.")
            }
        },
    }
})();
