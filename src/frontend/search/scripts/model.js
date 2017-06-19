var model = (function() {

    return {
        init: function() {

        },


        send: function(origin, destination, price, departureDate, returnDate) {
            var result;
            var data = {"passenger": {'origin':origin, 'destination': destination, 'price': price,
             'departureDate': departureDate, 'returnDate': returnDate});
            result = $.ajax({
                url: "/api/itinerary/",
                type: 'PUT',
                data: data,
                async: false,
                success: function(data) {
                  //TODO save itinerary id into cookie or url
                    window.location.href = "/result";
                },
            });

            return result;
        }
    }
})();
