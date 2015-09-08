var $ = require('jquery');
var React = require('react');
var _ = require('lodash');

var LocationsApp = require('./components/locations-app.jsx');

$(function() {

  React.render(<LocationsApp />, document.getElementById('container'));
});
