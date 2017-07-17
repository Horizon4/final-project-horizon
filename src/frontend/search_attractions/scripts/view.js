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
        //alert("Attractions isn't implemented yet. Click to continue to the confirmation page.");
        //window.location.href = "/search_confirm";

        // Get data
        var destination = $("#destinationCity").val();
        var first = $("#focusAttraction").val();
        var second = $("#attraction2").val();
        var third = $("#attraction3").val();
        var fourth = $("#attraction3").val();

        // Attempt to search for attractions
        var success = controller.send(destination, first, second, third, fourth);

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
