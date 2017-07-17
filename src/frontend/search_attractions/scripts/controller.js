var controller = (function() {

    return {
        init: function() {
            model.init();
        },


        send: function(destination, first, second, third, fourth) {
            // Package data
            var data = {
                'destination': destination,
                'mainFocus': first,
                'attractions': [second, third, fourth],
            };

            // Search for attractions
            var result = model.send(data);
            return result;
        },
    }
})();
