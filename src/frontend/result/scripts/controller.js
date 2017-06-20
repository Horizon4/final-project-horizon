var controller = (function() {

    return {
        init: function() {

        },
        findFlights: function() {
            var itinerary = Cookies.getJSON('itinerary');

            var result = model.findFlights(itinerary.id);
            result = result.responseText;
            return result;
        },
    }
})();
