var React = require('react');
var ResultItem = require('./result-item.jsx');
var _ = require('lodash');

module.exports = React.createClass({
  render: function(){
    var self = this;
    var resultItems = _.map(this.props.results, function(result){
      return <ResultItem result={result} changeStatus={self.props.changeStatus}/>;
    });

    return (
      <div id="searchResults" className="large-8 medium-8 columns">
          <h4>Search results</h4>
          <div id="results">
            {resultItems}
          </div>
      </div>
    );
  }
});
