var React = require('react');
var actions = require('../actions');

module.exports = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  backToRoom: function () {
    this.props.dispatch(actions.actions.backToRoom());
  },
  render: function () {
    if (this.props.page !== actions.PageStates.GAMING) {
      return null;
    } else {
      return (
        <div>
          <h1>{"Game Table"}</h1>
          <label>{"Name: " + this.props.name}</label>
          <br />
          <button type="button" onClick={this.backToRoom}>
            {"Back To Room"}
          </button>
        </div>
      );
    }
  }
});