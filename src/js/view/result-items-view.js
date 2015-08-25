var ResultItemsView = Backbone.View.extend({
  initialize: function(resultModel, likeModel) {
    this.resultModel = resultModel;
    this.likeModel = likeModel;
    this.resultModel.bind('change:results', _.bind(this.render, this));
    this.template = $('#result-items-template').html();
  },

  events: {
    'click .like': 'addLikeItem'
  },

  addLikeItem: function(e) {
    e.preventDefault();
    var that = this;
    var item = $(e.target).parent().find('h5').text();
    var likes = that.likeModel.get('likes');
    likes.push({"name": item});
    this.likeModel.trigger('change:likes', likes);
  },

  el: '#resultItems',

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled(this.resultModel.toJSON());
    this.$el.html(html);

    return this.$el;
  }
});
