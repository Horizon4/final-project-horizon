var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        send: function(priceLevel) {
            var data = {
                'priceLevel': priceLevel
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
