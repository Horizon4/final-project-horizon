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

        $(".msg").hide().removeClass("error success");

        var username = $("#sign_in_user").val();
        var password = $("#sign_in_pass").val();
        var msg = $("#sign_in_msg");

        var success = controller.signin(username, password);

        if (!success){
            msg.text("Incorrect username or password.").addClass("error");
            msg.show();
        }
    }

    function submitSignUp(e) {
        e.preventDefault();

        $(".msg").hide().removeClass("error success");

        var username = $("#sign_up_user").val();
        var password = $("#sign_up_pass").val();
        var confirmation = $("#sign_up_conf").val();

        var msg = $("#sign_up_msg");

        if (password === confirmation) {
            var success = controller.signup(username, password);
            if (!success) {
                msg.text("Username has been taken.").addClass("error");
                msg.show();
            } else {
                msg.text("Account created.").addClass("success");
                msg.show();
            }
        } else {
            msg.text("Passwords do not match.").addClass("error");
            msg.show();
        }
    }

    return {
        init: function() {
            $("#sign_in_up").tabs();

            $("#sign_in_btn").click(submitSignIn);
            $("#sign_up_btn").click(submitSignUp);
        }
    }
})();
