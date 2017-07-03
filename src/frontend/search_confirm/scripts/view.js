$(document).ready(function() {
    controller.init();
    view.init();
});

var view = (function() {

    return {
        init: function() {
            confirm.init();
        },
    }
})();


var confirm = (function() {

    function searchSubmit(e) {
        e.preventDefault();

        $(".msg").hide().removeClass("error success");



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
