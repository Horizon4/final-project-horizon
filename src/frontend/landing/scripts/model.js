var model = (function() {

    return {
        init: function() {

        },
        signin: function(data) {
            $.ajax({
                url: "/api/signin",
                type: 'POST',
                data: data,
                success: function(result) {
                    console.log(result);
                },
                statusCode: {
                    500: function(result) {
                        console.log(result);
                    },
                    401: function(result) {
                        console.log(result);
                    },
                },
            });
        },
        signup: function(data) {
            $.ajax({
                url: "/api/user",
                type: 'PUT',
                data: data,
                success: function(result) {
                    console.log(result);
                },
                statusCode: {
                    500: function(result) {
                        console.log(result);
                    },
                },
            });
        },
    }
})();
