var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        send: function(origin, destination, departureDate, returnDate, budget) {
            // Package data
            var data = {
                'username': Cookies.getJSON('username'),
                'origin': origin,
                'destination': destination,
                'departureDate': departureDate,
                'returnDate': returnDate,
                'price': budget,
            };

            // Attempt to create new itinerary
            var result = model.send(data);
            // Return true if successful
            return result;
        },
    }
})();
