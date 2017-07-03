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

        // Initialize all message element
        $(".msg").hide().removeClass("error success");

        // Get username and password from user
        var username = $("#sign_in_user").val();
        var password = $("#sign_in_pass").val();
        // Store reference to message element for login
        var msg = $("#sign_in_msg");

        // Attempt to login
        var success = controller.signin(username, password);

        // If unsuccessful, display error message
        if (!success){
            msg.text("Incorrect username or password.").addClass("error");
            msg.show();
        }
    }

    function submitSignUp(e) {
        e.preventDefault();

        // Initialize all message element
        $(".msg").hide().removeClass("error success");

        // Get new account information
        var username = $("#sign_up_user").val();
        var password = $("#sign_up_pass").val();
        var confirmation = $("#sign_up_conf").val();
        // Store reference to message element for login
        var msg = $("#sign_up_msg");

        // Check passwords match
        if (password === confirmation) {
            // Attempt to create new account
            var success = controller.signup(username, password);
            // Display message based success of creating new account
            if (success) {
                msg.text("Account created.").addClass("success");
                msg.show();
            } else {
                msg.text("Username has been taken.").addClass("error");
                msg.show();
            }
        } else {
            msg.text("Passwords do not match.").addClass("error");
            msg.show();
        }
    }

    return {
        init: function() {
            // jQuery UI tabs
            $("#sign_in_up").tabs();

            // Bind blibk listeners
            $("#sign_in_btn").click(submitSignIn);
            $("#sign_up_btn").click(submitSignUp);
        }
    }
})();
