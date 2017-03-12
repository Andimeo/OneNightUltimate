require('./Card.css');
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  propTypes: {
    index: React.PropTypes.number.isRequired,
    userName: React.PropTypes.string,
    role: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    isEnableSelect: React.PropTypes.bool.isRequired,
    toggleSelection: React.PropTypes.func.isRequired
  },
  onClick: function (e) {
    e.preventDefault();
    this.props.toggleSelection();
  },
  render: function () {
    var cardStyle = classNames("card", {
      card_selected: this.props.isSelected
    });
    return (
      <div className={cardStyle} onClick={this.onClick}>
        <div>{this.props.role}</div>
        <div>{this.props.userName}</div>
      </div>
    );
  }
});