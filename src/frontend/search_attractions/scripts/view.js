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
        alert("Attractions isn't implemented yet. Click to continue to the confirmation page.");
        window.location.href = "/search_confirm";

        /*// Get data
        var price = $("#price").val();
        var adult = $("#adultCount").val();
        var child = $("#childCount").val();
        var senior = $("#seniorCount").val();
        var cabin = $("#cabin").val();
        var carrier = $("#carrier").val();

        // Attempt to search for flights
        var success = controller.send(price, adult, child, senior, cabin, carrier);

        if (!success){
            alert("Oops, something broke!");
        }*/
    }

    return {
        init: function() {
            $("#submitButton").click(searchSubmit);
        }
    }
})();
