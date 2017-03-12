require('./RegisterForm.css');
var React = require('react');
var actions = require('../actions');

module.exports = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired
  },
  doEnter: function () {
    this.props.dispatch(actions.actions.doEnter(this.refs.name.value.trim()));
  },
  render: function () {
    if (this.props.page !== actions.PageStates.REGISTER) {
      return null;
    } else {
      return (
        <div className="register_form">
          <div>{"Your Name"}</div>
          <div>
            <input type="text" ref="name"/>
          </div>
          <div>
            <button type="button" onClick={this.doEnter}>
              {"Enter Room"}
            </button>
          </div>
        </div>
      );
    }
  }
});