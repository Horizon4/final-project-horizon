var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        send: function(city) {
            // Package data
            var data = {
                'destination': city,
            };

            // Search for accomodations
            var result = model.send(data);
            return result;
        },
    }
})();
