var model = (function() {

    return {
        init: function() {

        },


        send: function(data) {
            var itineraryID = Cookies.getJSON("itineraryID");

            // Add flight preference information
            var addFlightAPI = $.ajax({
                url: "/api/addFlight/" + itineraryID,
                type: 'PUT',
                data: data,
                async: false,
                success: function(data) {

                },
                error: function(data) {
                    console.log(data);
                },
            });
            if (addFlightAPI.status != 200) {
                return false;
            }

            // Get possible flights
            var findFlightsAPI = $.ajax({
                url: "/api/findFlights/" + itineraryID,
                type: 'GET',
                async: false,
                success: function(data) {
                    // Redirect to next step
                    window.location.href = "/search_accommodation";
                },
                error: function(data) {
                    console.log(data);
                },
            });
            if (findFlightsAPI.status != 200) {
                return false;
            }

            return true;
        }
    }
})();
