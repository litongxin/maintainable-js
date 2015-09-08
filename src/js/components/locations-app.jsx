var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var SearchResults = require('./search-results.jsx');
var SearchForm = require('./search-form.jsx');
var LikePlaces = require('./like-places.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    var data = [
      {
        "id": "result_9999",
        "name": "Place of interesting",
        "description": "Description of the place",
        "like": false
     }
    ];

    return {results: data};
  },

  changeStatus: function(id){
    var results = this.state.results;
    var result = _.first(_.where(results, {id: id}));
    result.like = !result.like;

    this.setState({results: results});
  },

  handleAdd: function (text){
    var self = this;
    var requestUrl = "http://location-backend-service.herokuapp.com/locations?name="+text;
    $.get(requestUrl, function(datas){
      formatResults = [];
      _.each(datas, function(data){
        formatResults.push({"id": _.uniqueId('result_'), "name": data.name, "description": data.description, "like": false });
      });
      self.setState({results: formatResults});
    }).fail(function() {
      Console.log("Request fails!");
    });
  },

  render: function(){
    return (
      <div>
        <div className="row">
          <SearchForm onAdd={this.handleAdd}/>
        </div>

        <div className="row">
          <hr className="large-12 columns" />
        </div>

        <div className="row">
          <SearchResults results={this.state.results} changeStatus={this.changeStatus}/>
          <LikePlaces results={this.state.results} changeStatus={this.changeStatus}/>
        </div>
     </div>
    )
  }
});
