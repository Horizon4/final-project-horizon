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

        // Get data
        var city = $("#destinationCity").val();

        // Attempt to find accommodations
        var success = controller.send(city);

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
