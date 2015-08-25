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
    $.get(requestUrl, function(datas){
      formatResults = [];
      _.each(datas, function(data, index){
        formatResults.push({"id":index, "name": data.name, "description": data.description, "like": false });
      });
      that.model.set('results', formatResults);
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
