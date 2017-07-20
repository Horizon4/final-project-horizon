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
        components.showLoading();

        // Get data
        var origin = $("#origin").val();
        var destination = $("#destination").val();
        var departureDate = $("#departureDate").val();
        var returnDate = $("#returnDate").val();
        var budget = $("#budget").val();

        // Attempt to create new itinerary
        var success = controller.send(origin, destination, departureDate, returnDate, budget);
        components.hideLoading();

        if (!success){
            alert("Oops, something broke!");
        }
    }

    return {
        init: function() {
            $("#submitButton").click(searchSubmit);
        }
    }
})();
