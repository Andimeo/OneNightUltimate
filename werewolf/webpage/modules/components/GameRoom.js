var React = require("react");
var actions = require("../actions");

module.exports = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  startGame: function () {
    this.props.dispatch(actions.actions.startGame());
    this.props.dispatch(actions.actions.startSelection());
  },
  render: function () {
    if (this.props.page !== actions.PageStates.ROOM) {
      return null;
    } else {
      return (
        <div>
          <h1>{"Game Room"}</h1>
          <label>{"Name: " + this.props.name}</label>
          <br />
          <button type="button" onClick={this.startGame}>
            {"Start Game"}
          </button>
        </div>
      );
    }
  }
});