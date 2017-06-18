$(document).ready(function() {
    controller.init();
    view.init();
});


var view = (function() {

    return {
        init: function() {
            sign_in_up.init();
        },
    }
})();


var sign_in_up = (function() {

    function submitSignIn(e) {
        e.preventDefault();

        var username = $("#sign_in_user").val();
        var password = $("#sign_in_pass").val();

        controller.signin(username, password);
    }

    function submitSignUp(e) {
        e.preventDefault();

        var username = $("#sign_up_user").val();
        var password = $("#sign_up_pass").val();
        var confirmation = $("#sign_up_conf").val();

        if (password === confirmation) {
            controller.signup(username, password);
        } else {
            // TODO create error message on webpage
            console.error("password does not match");
        }
    }

    return {
        init: function() {
            $("#sign_in_btn").click(submitSignIn);
            $("#sign_up_btn").click(submitSignUp);
        }
    }
})();
