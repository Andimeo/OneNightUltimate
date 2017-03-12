var React = require('react');
var actions = require('../actions');

module.exports = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired
  },
  doEnter: function () {
    console.log(this);
    this.props.dispatch(actions.actions.doEnter(this.refs.name.value.trim()));
  },
  render: function () {
    if (this.props.page !== actions.PageStates.REGISTER) {
      return null;
    } else {
      return (
        <div>
          <h1>{"Register Form"}</h1>
          <label>{"Your Name: "}</label><input type="text" ref="name"/>
          <br />
          <button type="button" onClick={this.doEnter}>
            {"Enter Room"}
          </button>
        </div>
      );
    }
  }
});