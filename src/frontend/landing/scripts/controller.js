var controller = (function() {

    return {
        init: function() {
            model.init();
        },
        signin: function(user, pass) {
            var data = {username: user, password: pass};
            model.signin(data);
        },
        signup: function(user, pass) {
            var data = {username: user, password: pass};
            model.signup(data);
        },
    }
})();
