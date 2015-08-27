var $ = require('jquery');

var ResultItem = require('./model/result-model');
var LikeItem = require('./model/like-model');
var SearchFormView = require('./view/search-form-view');
var ResultItemsView = require('./view/result-items-view');
var LikeItemsView = require('./view/like-items-view');

$(function() {
  var resultData = [
    {
      "id": "result_9999",
      "name": "Place of interesting",
      "description": "Description of the place",
      "like": false
   }
  ];
  var likeData = [];
  var resultModel = new ResultItem({'results': resultData});
  var likeModel = new LikeItem({'likes':likeData});
  var searchForm = new SearchFormView(resultModel);
  var resultItems = new ResultItemsView(resultModel, likeModel);
  var likeItems = new LikeItemsView(resultModel, likeModel);

  $('#searchForm').append(searchForm.render());
  $('#resultItems').append(resultItems.render());
  $('#likeItems').append(likeItems.render());
});
