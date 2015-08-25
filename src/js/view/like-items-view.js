var LikeItemsView = Backbone.View.extend({
  initialize: function(resultModel, likeModel) {
    this.resultModel = resultModel;
    this.likeModel = likeModel;
    this.likeModel.bind('change:likes', _.bind(this.render, this));
    this.template = $('#like-items-template').html();
  },

  events: {
    'click .remove-like': 'removeLikeItem'
  },

  el: '#likesItems',

  removeLikeItem: function(e){
    e.preventDefault();
    var that = this;
    var item = $(e.target).parent().find('.like-item').text();
    var id = $(e.target).parent().find('.like-id').text();
    var likes = that.likeModel.get('likes');
    var results = that.resultModel.get('results');
    likes.pop({"name": item});
    _.each(results,function(result){
      if(result.id == id){
        result.like = false;
      }
    });
    this.likeModel.trigger('change:likes', likes);
    this.resultModel.trigger('change:results', results);
  },

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled(this.likeModel.toJSON());
    this.$el.html(html);

    return this.$el;
  }
});
