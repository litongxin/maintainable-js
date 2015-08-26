$(function() {
  var resultData = [
    {
      "id": 99999999,
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

  searchForm.render();
  resultItems.render();
  likeItems.render();
});
