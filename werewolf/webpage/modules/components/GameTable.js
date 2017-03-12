var React = require('react');
var actions = require('../actions');
var WrappedCard = require('../containers/WrappedCard');

module.exports = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    cards: React.PropTypes.arrayOf(
      React.PropTypes.shape(
        {
          userName: React.PropTypes.string,
          role: React.PropTypes.string.isRequired,
          isSelected: React.PropTypes.bool.isRequired,
          isEnableSelect: React.PropTypes.bool.isRequired
        }
      )
    )
  },
  backToRoom: function () {
    this.props.dispatch(actions.actions.backToRoom());
    this.props.dispatch(actions.actions.finishSelection());
  },
  render: function () {
    if (this.props.page !== actions.PageStates.GAMING) {
      return null;
    } else {
      var cards = this.props.cards.map(function (card, index) {
        return (
          <WrappedCard key={index} index={index} userName={card.userName}
                role={card.role} isSelected={card.isSelected}
                isEnableSelect={card.isEnableSelect}/>
        );
      });
      return (
        <div>
          {cards}
          <button type="button" onClick={this.backToRoom}>
            {"Back To Room"}
          </button>
        </div>
      );
    }
  }
});