var model = (function() {

    return {
        init: function() {

        },


        send: function(data) {
            var itineraryID = Cookies.getJSON("itineraryID");

            // Fnd possible attractions
            var findAttractionsAPI = $.ajax({
                url: "/api/findAttraction/" + itineraryID,
                type: 'PUT',
                data: data,
                async: false,
                success: function(data) {
                    // Redirect to next step
                    window.location.href = "/search_confirm";
                },
                error: function(data) {
                    console.log(data);
                },
            });
            if (findAttractionsAPI.status != 200) {
                return false;
            }

            return true;
        }
    }
})();
