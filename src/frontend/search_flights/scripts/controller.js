var controller = (function() {

    return {
        init: function() {
            model.init();
        },


        send: function(price, adult, child, senior, cabin, carrier) {
            // Package data
            var data = {
                'price': price,
                'adult': adult || null,
                'child': child || null,
                'senior': senior || null,
                'cabin': cabin || null,
                'carrier': carrier || null,
            };

            // Search for flights
            var result = model.send(data);
            return result;
        },
    }
})();
