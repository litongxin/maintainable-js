var React = require('react');

module.exports = React.createClass({
  handleChange: function(){
    this.props.changeStatus(this.props.result.id);
  },

  render: function(){
    return (
      <div className="panel large-12 columns">
        <h5>{this.props.result.name}</h5>
        <h6>{this.props.result.description}</h6>
        <a href="#" className="like button tiny right" data-id='1' onClick={this.handleChange}>
            { this.props.result.like ? 'Unlike' : 'Like' }
        </a>
      </div>
    );
  }
});
