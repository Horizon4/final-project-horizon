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

        var origin = $("#origin").val();
        var destination = $("#destination").val();
        var departureDate = $("#date").val();
        var returnDate = $("#return").val();
        var budget = $("#budget").val();

        //console.log(origin, destination, price, departureDate, returnDate); //DEBUG
        var success = controller.send(origin, destination, departureDate, returnDate, budget);

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
