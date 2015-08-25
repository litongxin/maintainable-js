var SearchFormView = Backbone.View.extend({
  initialize: function(model) {
    this.model = model;
    this.template = $('#search-form').html();
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
    $.get(requestUrl, function(data){
      that.model.set('results', data);
    }).fail(function() {
      Console.log("Request fails!");
    });
    // this.model.trigger('change:results', results);
  },

  render: function() {
    var compiled = _.template(this.template);
    var html = compiled();
    this.$el.html(html);

    return this.$el;
  }
});
