var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        send: function(origin, destination, price, departureDate, returnDate) {
            var data = {
                'origin':origin,
                'destination': destination,
                'price': price,
                'departureDate': departureDate,
                'returnDate': returnDate
            };
            //console.log(data); //DEBUG
            var result = model.send(data);
            if (result.status == 200) {
                return true;
            } else {
                return false;
            }
        },
    }
})();
