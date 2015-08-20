$(document).ready(function(){
    $('#searchButton').click(renderLocation);
    $('#results').on('click', '.like', addLikePlace);

    function renderLocation(){
      var locationInput = $('#locationInput').val();
      var requestUrl = "http://location-backend-service.herokuapp.com/locations?name="+locationInput;
      $.get(requestUrl, function(data){
        var locationTemplate = "<% _.each(data,function(item){ %><div class='panel large-12 columns'><h5><%= item.name %></h5><h6><%= item.description %></h6><a href='#' class='like button tiny right'>Like</a></div><% }) %>";
        $('#results').html(_.template(locationTemplate, {variable: 'data'})(data));
      }).fail(function() {
        Console.log("Request fails!");
      });
    }

    function addLikePlace(){
      var locationName = $(this).parent().find('h5').text();
      var locationNameTemplate = "<li class='like'><%= name %></li>";
      $('#likedPlaces').find('ul').last('li').append(_.template(locationNameTemplate, {variable: 'name'})(locationName));
    }
});
