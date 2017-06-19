var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        send: function(origin, destination, price, departureDate, returnDate) {
          var data = {"passenger": {'origin':origin, 'destination': destination, 'price': price,
           'departureDate': departureDate, 'returnDate': returnDate});
            var result = model.send(data);
            if (result.status == 201) {
                return true;
            } else {
                return false;
            }
        },
