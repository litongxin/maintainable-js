var React = require('react');
var LikePlace = require('./like-place.jsx');
var _ = require('lodash');

module.exports = React.createClass({
  render: function(){
    var self = this;
    var likedPlaces = _.map(this.props.results, function(result){
      if(result["like"]){
        return <LikePlace result={result} changeStatus={self.props.changeStatus}/>;
      }
    });

    return (
      <div id="likedPlaces"  className="large-4 medium-4 columns">
          <h4>Places I liked</h4>
          <nav>
              <ul>
                {likedPlaces}
              </ul>
          </nav>
      </div>
    );
  }
});
