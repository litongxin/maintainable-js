var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
  getInitialState: function() {
    return {inputValue: ''};
  },

  handleChange: function(){
    this.props.onAdd(this.state.inputValue);
    this.setState({inputValue: ''})
  },

  handleInput: function(){
    this.setState({inputValue: event.target.value});
  },

  render: function(){
    return (
      <div id="searchForm">
        <div  className="large-9 medium-9 columns">
          <input type="text" id="locationInput" placeholder="Type a location name to search" onChange={this.handleInput}/>
        </div>
        <div  className="large-3 medium-3 columns">
            <input type="button" className="submit button tiny" id="searchButton" value="search" onClick={this.handleChange}/>
        </div>
      </div>
    )
  }
});
