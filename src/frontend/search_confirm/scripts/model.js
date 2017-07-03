var model = (function() {

    return {
        init: function() {

        },


        send: function(data) {
            var result;
            Cookies.set('itinerary', data);
            result = $.ajax({
                url: "/api/createItinerary/",
                type: 'POST',
                data: data,
                async: false,
                success: function(data) {
                    //console.log(data.itinerary._id);//DEBUG
                    var itinerary = Cookies.getJSON('itinerary');
                    itinerary.id = data.itinerary._id;
                    Cookies.set('itinerary', itinerary);
                    //TODO save itinerary id into cookie or url
                    window.location.href = "/result";
                    //console.log("successful");//DEBUG
                },
            });
            console.log(result);//DEBUG

            return result;
        }
    }
})();
