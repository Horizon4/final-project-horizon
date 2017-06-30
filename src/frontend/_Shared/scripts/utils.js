$(document).ready(function(){
    components.init();
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
