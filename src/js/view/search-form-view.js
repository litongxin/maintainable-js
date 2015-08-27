var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var template = require('../template/search-form-template.hbs');

module.exports = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
  },

  events: {
    'click #searchButton': 'getResultItems'
  },

  el: '#searchForm',

  getResultItems: function(e) {
    e.preventDefault();
    var that = this;
    var locationInput = $('#locationInput').val();
    var requestUrl = "http://location-backend-service.herokuapp.com/locations?name="+locationInput;
    $.get(requestUrl, function(datas){
      formatResults = [];
      _.each(datas, function(data){
        formatResults.push({"id": _.uniqueId('result_'), "name": data.name, "description": data.description, "like": false });
      });
      that.model.set('results', formatResults);
    }).fail(function() {
      Console.log("Request fails!");
    });
  },

  render: function() {
    var html = template;
    this.$el.html(html);

    return this.$el;
  }
});
