var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        signin: function(user, pass) {
            // Package data
            var data = {username: user, password: pass};
            // Attempt to login
            var result = model.signin(data);
            // return true if success
            return (result.status == 201);
        },
        signup: function(user, pass) {
            // Package data
            var data = {username: user, password: pass};
            // Attempt to create new user
            var result = model.signup(data);
            // return true if success
            return (result.status == 201);
        },
    }
})();
