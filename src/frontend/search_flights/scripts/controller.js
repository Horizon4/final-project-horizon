var controller = (function() {

    return {
        init: function() {
            model.init();
        },


        send: function(price) {
            var data = {
                'price': price
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
