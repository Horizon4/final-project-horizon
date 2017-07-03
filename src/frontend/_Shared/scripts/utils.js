$(document).ready(function(){
    components.init();
    checkLoggedIn();
});


var components = (function() {

    function load_nav_bar() {
        $("#nav_bar").load("/_Shared/components/nav-bar/index.html");
    }

    return {
        init: function() {
            load_nav_bar();
        },
    }
})();

function checkLoggedIn() {
    if ((window.location.href !== "http://localhost:3000/") && ($.isEmptyObject(Cookies.getJSON("username")))) {
        alert("You need to be logged in for this page to work.");
    }
}
