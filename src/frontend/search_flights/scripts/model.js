var model = (function() {

    return {
        init: function() {

        },


        send: function(data) {
            itineraryID = Cookies.getJSON("itineraryID");

            var addFlightAPI = $.ajax({
                url: "/api/addFlight/" + itineraryID,
                type: 'PUT',
                data: data,
                async: false,
                success: function(data) {
                    console.log(data);
                },
                error: function(data) {
                    console.log(data);
                },
            });
            if (addFlightAPI.status != 200) {
                return false;
            }

            var findFlightAPI = $.ajax({
                url: "/api/findFlights/" + itineraryID,
                type: 'GET',
                async: false,
                success: function(data) {
                    console.log(data);
                },
                error: function(data) {
                    console.log(data);
                },
            });
            if (findFlightAPI.status != 200) {
                return false;
            }

            return true;
        }
    }
})();
