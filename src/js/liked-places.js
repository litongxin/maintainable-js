function LikedPlaces(){
  this.add = function(name){
    var locationNameTemplate = "<li class='like'><%= name %></li>";
    $('#likedPlaces').find('ul').last('li').append(_.template(locationNameTemplate, {variable: 'name'})(name));
  };
}
