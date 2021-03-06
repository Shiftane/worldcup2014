var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "rounds"        	: "list",
        "rounds/page/:page"	: "list",
        "rounds/:id"         : "roundDetails",
        "about"             : "about"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function (id) {
        if (!this.homeView) {
            this.homeView = new HomeView();
        }
        $('#content').html(this.homeView.el);
        this.headerView.selectMenuItem('home-menu');
    },

	list: function(page) {
        alert("in LIST function");
        var p = page ? parseInt(page, 10) : 1;
        alert("roundList Creation in progress...");
        var roundList = new RoundCollection();
        alert("roundList Created");

        roundList.fetch({success: function(){
            alert("Fetch success");
            $("#content").html(new RoundListView({model: roundList, page: p}).el);
        },
	error : function(collection, response, options){
		alert("error : " + collection + response + options);
	}});
        this.headerView.selectMenuItem('home-menu');
    },

    roundDetails: function (id) {
        var wine = new Wine({_id: id});
        wine.fetch({success: function(){
            $("#content").html(new RoundView({model: wine}).el);
        }});
        this.headerView.selectMenuItem();
    },

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    }

});

utils.loadTemplate(['HomeView', 'HeaderView', 'RoundView', 'RoundListItemView', 'AboutView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});
