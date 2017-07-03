$(document).ready(function() {
    controller.init();
    view.init();
});

var view = (function() {

    return {
        init: function() {
            searchButtonCheck.init();
        },
    }
})();


var searchButtonCheck = (function() {

    function searchSubmit(e) {
        e.preventDefault();

        $(".msg").hide().removeClass("error success");

        var origin = $("#priceLevel").val();

        //console.log(origin, destination, price, departureDate, returnDate); //DEBUG
        var success = controller.send(priceLevel);

        /*if (!success){
            msg.text("Error sending fields").addClass("error");
            msg.show();
        }*/
    }

    return {
        init: function() {
            $("#submitButton").click(searchSubmit);
        }
    }
})();
