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
        var destination = $("#destinationCity").val();
        var first = $("#focusAttraction").val();
        var second = $("#attraction2").val();
        var third = $("#attraction3").val();
        var fourth = $("#attraction3").val();

        // Attempt to search for attractions
        var success = controller.send(destination, first, second, third, fourth);
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
