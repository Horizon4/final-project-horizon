var model = (function() {

    return {
        init: function() {
            $.ajax({
                url: "/api/user",
                type: 'put',
                data: {username: 'a', password: 'a'},
                success: function(result) {
                    console.log(result);
                },
            });
        },
    }
})();
