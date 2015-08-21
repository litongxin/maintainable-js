function SearchResults(){
  this.render = function(results){
     var locationTemplate = "<% _.each(data,function(item){ %><div class='panel large-12 columns'><h5><%= item.name %></h5><h6><%= item.description %></h6><a href='#' class='like button tiny right'>Like</a></div><% }) %>";
     $('#results').html(_.template(locationTemplate, {variable: 'data'})(results));
    // var resultTemplate = _.template('<div class="panel large-12 columns">' +
    //                                     '<h5><%= name %></h5>' +
    //                                     '<h6><%= description %></h6>' +
    //                                     '<a href="#" class="like button tiny right">Like</a>' +
    //                                   '</div>');
    // var renderedResults = _.map(results, function(result){
    //             return resultTemplate(result);
    //           });
    // $('#searchResults #results').empty();
    // $('#searchResults #results').append(renderedResults);
  };

}
