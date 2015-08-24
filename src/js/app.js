function App(){
  var searchResults = new SearchResults();
  var likedPlaces = new LikedPlaces();
  searchResults.handler();
  this.sender = function(){
    $('#searchButton').click(function(){
      var locationInput = $('#locationInput').val();
      var requestUrl = "http://location-backend-service.herokuapp.com/locations?name="+locationInput;
      $.get(requestUrl, function(data){
        searchResults.render(data);
      });
    });
  }
  this.addLike = function(){
    $(document).on('like', function(e, name){
      likedPlaces.add(name);
    });
  }
}

$(document).ready(function(){
  var app = new App();
  app.sender();
  app.addLike();
});