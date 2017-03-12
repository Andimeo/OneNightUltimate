var React = require("react");
var actions = require("../actions");
var RegisterPage = require("../containers/RegisterPage");
var RolesPage = require("../containers/RolesPage");
var GamePage = require("../containers/GamePage");

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <RegisterPage />
        <RolesPage />
        <GamePage />
      </div>
    );
  }
});