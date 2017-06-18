var model = (function() {

    return {
        init: function() {

        },
        signin: function(data) {
            $.ajax({
                url: "/api/user",
                type: 'put',
                data: data,
                success: function(result) {
                    console.log(result);
                },
            });
        },
        signup: function(data) {
            $.ajax({
                url: "/api/user",
                type: 'put',
                data: data,
                success: function(result) {
                    console.log(result);
                },
            });
        },
    }
})();
