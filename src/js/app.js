function App(){
  var searchResults = new SearchResults();
  var likedPlaces = new LikedPlaces();
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
      var alreadyInLikedPlaces = _.find($('#likedPlaces li'), function(list) { return list.textContent == name})
      if(!alreadyInLikedPlaces) {
        likedPlaces.add(name);
      }
    });
  }

  App.prototype.liston = function(){
    searchResults.handler();
    this.sender();
    this.addLike();
  }
}

$(function(){
  var app = new App();
  app.liston();
});