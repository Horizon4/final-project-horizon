var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        getNumItineries: function() {
            return model.getNumItineries();
        },
        getFlights: function(idx) {
            return model.getFlights(idx);
        },
        getAccommodations: function(idx) {
            return model.getAccommodations(idx);
        },
        getAttractions: function(idx) {
            return model.getAttractions(idx);
        },

        selectItinerary: function(idx) {
            return model.selectItinerary(idx);
        }

    }
})();
