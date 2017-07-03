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

        var price = $("#price").val();
        var adult = $("#adultCount").val();
        var child = $("#childCount").val();
        var senior = $("#seniorCount").val();
        var cabin = $("#cabin").val();
        var carrier = $("#carrier").val();

        var success = controller.send(price, adult, child, senior, cabin, carrier);

        if (!success){
            alert("Oops, something broke!")
        }
    }

    return {
        init: function() {
            $("#submitButton").click(searchSubmit);
        }
    }
})();
