var React = require('react');
var actions = require('../actions');
var RegisterPage = require('../containers/RegisterPage');
var RoomPage = require('../containers/RoomPage');
var GamePage = require('../containers/GamePage');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <RegisterPage />
        <RoomPage />
        <GamePage />
      </div>
    );
  }
});