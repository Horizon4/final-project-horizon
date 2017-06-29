$(document).ready(function(){
    controller.init();
    view.init();
});

var view = (function() {

    return {
        init: function() {
        $("#main_wrapper").tabs();

        },
    }
})();
