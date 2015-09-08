var React = require('react');

module.exports = React.createClass({
  handleChange: function(){
    this.props.changeStatus(this.props.result.id);
  },

  render: function(){
    return (
      <li className="like">
        {this.props.result.name}
        <a className="like-icon" onClick={this.handleChange}>X</a>
      </li>
    );
  }
});
