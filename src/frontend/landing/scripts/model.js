var model = (function() {

    return {
        init: function() {

        },


        signin: function(data) {
            // Call backend
            var result = $.ajax({
                url: "/api/signin",
                type: 'POST',
                data: data,
                async: false,
                success: function(data) {
                    // Store username in cookie
                    Cookies.set('username', data.user.username);
                    // Redirect to view
                    window.location.href = "/view";
                },
            });

            return (result.status == 201);
        },

        signup: function(data) {
            // Call backend
            var result = $.ajax({
                url: "/api/user",
                type: 'PUT',
                data: data,
                async: false,
            });

            return (result.status == 201);
        },
    }
})();
