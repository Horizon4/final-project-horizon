$(document).ready(function(){
    components.init();
    checkLoggedIn();
});


var components = (function() {

    function load_nav_bar() {
        $("#nav_bar").load("/_Shared/components/nav-bar/index.html");
    }

    function load_dataLists() {
        $("#dataLists").load("/_Shared/components/dataLists/index.html");
    }

    return {
        init: function() {
            load_nav_bar();
            load_dataLists();
        },
        showLoading: function() {
            $("#loader").load("/_Shared/components/loader/index.html");
        },
        hideLoading: function() {
            $("#loader").html("");
        }
    }
})();

function checkLoggedIn() {
    if ((window.location.href !== "http://localhost:3000/") && ($.isEmptyObject(Cookies.getJSON("username")))) {
        alert("You need to be logged in for this page to work.");
        window.location.href = "/";
    }
}
