var controller = (function() {

    return {
        init: function() {

        },
        getItineraries: function(city) {
            model.getItineraries(city);
        },
        showItineraries: function() {
            if (model.getItineraryLength() === 0) {
                view.noItinerariesFound();
            } else {
                for (var i = 0; i < model.getItineraryLength(); i++) {
                    view.showItineraries(model.getItinerary(i));
                }
            }
        },
        noItinerariesFound: function() {
            view.noItinerariesFound();
        },
    }
})();
