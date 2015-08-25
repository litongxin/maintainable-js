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
    var id = $(e.target).parent().find('span').text();
    var likes = that.likeModel.get('likes');
    var results = that.resultModel.get('results');
    var alreadyInLikedPlaces = _.find($('#likedPlaces li span'), function(list) { return list.textContent == item});
    if(!alreadyInLikedPlaces){
      likes.push({"name": item, "resultId": id});
      this.likeModel.trigger('change:likes', likes);
      $(e.target).disable = true;
      _.each(results,function(result){
        if(result.id == id){
          result.like = true;
        }
      });
      this.resultModel.trigger('change:results', results);
    }
  },

  el: '#resultItems',

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled(this.resultModel.toJSON());
    this.$el.html(html);

    return this.$el;
  }
});
