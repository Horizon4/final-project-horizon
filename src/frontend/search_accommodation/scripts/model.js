var model = (function() {

    return {
        init: function() {

        },


        send: function(data) {
            var itineraryID = Cookies.getJSON("itineraryID");

            var result = $.ajax({
                url: "/api/findAccommodation/" + itineraryID,
                type: 'PUT',
                data: data,
                async: false,
                success: function(data) {
                    // Redirect to next step
                    window.location.href = "/search_confirm";
                },
                error: function(data) {
                    console.log(data);
                }
            });

            return (result.status == 200);
        }
    }
})();
