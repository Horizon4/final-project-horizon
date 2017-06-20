$(document).ready(function(){
    controller.init();
    view.init();
});

var view = (function() {

    return {
        init: function() {
            var result = controller.findFlights();
            //console.log(result);//DEBUG
            $("#stuff").text(result);
        },
    }
})();
