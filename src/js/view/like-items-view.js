var LikeItemsView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.model.bind('change:likes', _.bind(this.render, this));
    this.template = $('#like-items-template').html();
  },

  el: '#likesItems',

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled(this.model.toJSON());
    this.$el.html(html);

    return this.$el;
  }
});
