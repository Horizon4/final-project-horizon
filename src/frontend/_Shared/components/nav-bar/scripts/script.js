$(document).ready(function() {
    $("#logout").click(function() {
        // Remove username cookie when logging out
        Cookies.remove("username");
    });
});
