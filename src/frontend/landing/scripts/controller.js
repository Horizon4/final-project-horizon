var controller = (function() {

    return {
        init: function() {
            model.init();
        },

        signin: function(user, pass) {
            var data = {username: user, password: pass};
            var result = model.signin(data);
            if (result.status == 201) {
                return true;
            } else {
                return false;
            }
        },
        signup: function(user, pass) {
            var data = {username: user, password: pass};
            var result = model.signup(data);
            if (result.status == 201) {
                return true;
            } else {
                return false;
            }
        },
    }
})();
