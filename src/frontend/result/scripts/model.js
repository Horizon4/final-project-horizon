var model = (function() {

    return {
        init: function() {

        },

        findFlights: function(itinerary_id) {
            var result = $.ajax({
                url: "/api/findFlights/:"+itinerary_id,
                type: 'GET',
                async: false,
            });
            console.log(result);
        },
    }
})();
