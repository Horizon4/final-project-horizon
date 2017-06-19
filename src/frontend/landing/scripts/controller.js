var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        signin: function(user, pass) {
            var data = {username: user, password: pass};
            var result = model.signin(data);
            if (result.error) {
                return false;
            } else {
                return true;
            }
        },
        signup: function(user, pass) {
            var data = {username: user, password: pass};
            var result = model.signup(data);
            if (result.error) {
                return false;
            } else {
                return true;
            }
        },
    }
})();
