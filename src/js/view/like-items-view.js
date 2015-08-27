var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var template = require('../template/like-results-template.hbs');


module.exports = Backbone.View.extend({
  initialize: function(resultModel, likeModel) {
    this.resultModel = resultModel;
    this.likeModel = likeModel;
    this.likeModel.bind('change:likes', _.bind(this.render, this));
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
    this.likeModel.trigger('change:likes', likes);
    likes = _.without(likes, _.findWhere(likes, {id: id}));
    this.likeModel.set('likes',likes);
    _.each(results,function(result){
      if(result.id == id){
        result.like = false;
      }
    });
    this.likeModel.trigger('change:likes', []);
    this.resultModel.trigger('change:results', results);
  },

  render: function() {
    var html = template(this.likeModel.toJSON())
    this.$el.html(html);
    return this.$el;
  }
});
