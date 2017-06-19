var model = (function() {

    return {
        init: function() {

        },


        signin: function(data) {
            var result;
            result = $.ajax({
                url: "/api/signin",
                type: 'POST',
                data: data,
                async: false,
                success: function(data) {
                    console.log(data);
                    // TODO store sign in data in cookie
                    window.location.href = "/dashboard";
                },
            });

            result = $.parseJSON(result.responseText);

            return result;
        },

        signup: function(data) {
            var result;
            result = $.ajax({
                url: "/api/user",
                type: 'PUT',
                data: data,
                async: false,
                success: function(data) {
                    return {error: false};
                },
            });

            result = $.parseJSON(result.responseText);

            return result;
        },
    }
})();
