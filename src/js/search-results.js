function SearchResults(){
  this.render = function(results) {
     var locationTemplate = "<% _.each(data,function(item){ %><div class='panel large-12 columns'><h5><%= item.name %></h5><h6><%= item.description %></h6><a href='#' class='like button tiny right'>Like</a></div><% }) %>";
     $('#results').html(_.template(locationTemplate, {variable: 'data'})(results));
  };

  this.handler = function() {
    $('#results').on('click', '.like', function(){
      $(document).trigger('like', [$(this).parent().find('h5').text()]);
    });
  }

}
