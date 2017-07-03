var model = (function() {

    return {
        init: function() {

        },


        send: function(data) {
            // Attepmt to create new itinerary
            var result = $.ajax({
                url: "/api/itineraryProcess/",
                type: 'POST',
                data: data,
                async: false,
                success: function(data) {
                    // Store itinerary id in cookie
                    Cookies.set('itineraryID', data._id);
                    // Redirect to next step
                    window.location.href = "/search_flights";
                },
            });

            return result;
        }
    }
})();
