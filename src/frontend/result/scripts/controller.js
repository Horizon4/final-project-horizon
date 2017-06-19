var controller = (function() {

    return {
        init: function() {

        },
        findFlights: function() {
            var itinerary = Cookies.getJSON('itinerary');
            
            model.findFlights(itinerary.id);
            var result;
        },
    }
})();
