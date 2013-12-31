window.Round = Backbone.Model.extend({

/*    urlRoot: "/rounds",*/

//    idAttribute: "id",

/*    initialize: function () {
        alert("Init Round");
        this.validators = {};

        this.validators.team1 = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a name"};
        };

        this.validators.team2 = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a grape variety"};
        };

        this.validators.date = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a country"};
        };
    },

    validateItem: function (key) {
        return (this.validators[key]) ? this.validators[key](this.get(key)) : {isValid: true};
    },

    // TODO: Implement Backbone's standard validate() method instead.
    validateAll: function () {

        var messages = {};

        for (var key in this.validators) {
            if(this.validators.hasOwnProperty(key)) {
                var check = this.validators[key](this.get(key));
                if (check.isValid === false) {
                    messages[key] = check.message;
                }
            }
        }

        return _.size(messages) > 0 ? {isValid: false, messages: messages} : {isValid: true};
    },

    defaults: {
        id: null,
        team1: "",
        team2: "",
        date: null
    }*/
});

window.RoundCollection = Backbone.Collection.extend({

    model: Round,

    url: "/rounds"


});
