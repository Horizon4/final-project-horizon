$(document).ready(function() {
    // IE10+
    document.getElementsByTagName( "html" )[0].classList.remove( "loading" );

    // All browsers
    document.getElementsByTagName( "html" )[0].className.replace( /loading/, "" );

    // Or with jQuery
    $( "html" ).removeClass( "loading" );
});
