window.RoundListView = Backbone.View.extend({

    initialize: function () {
        alert("intitialize ROUNDLISTVIEW");
        this.render();
    },

    render: function () {
        var rounds = this.model.models;
        var len = rounds.length;
        var startPos = (this.options.page - 1) * 8;
        var endPos = Math.min(startPos + 8, len);

        $(this.el).html('<ul class="list-group"></ul>');

        for (var i = startPos; i < endPos; i++) {
            alert("Render ROUNDLISTVIEW");
            $('.thumbnails', this.el).append(new RoundListItemView({model: rounds[i]}).render().el);
        }

        $(this.el).append(new Paginator({model: this.model, page: this.options.page}).render().el);

        return this;
    }
});

window.RoundListItemView = Backbone.View.extend({

    tagName: "li",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});