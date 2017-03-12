require("./RolesSelection.css");
var React = require("react");
var actions = require("../actions");
var WrappedCard = require("../containers/WrappedCard");

module.exports = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    startGame: React.PropTypes.func.isRequired
  },
  startGame: function (e) {
    e.preventDefault();
    this.props.startGame();
  },
  render: function () {
    var cards = this.props.cards.map(function (card, index) {
      return (
        <WrappedCard key={index} index={index} userName={card.userName}
                     role={card.role} isSelected={card.isSelected}
                     isEnableSelect={card.isEnableSelect}/>
      );
    });
    if (this.props.page !== actions.PageStates.ROLES_PAGE) {
      return null;
    } else {
      return (
        <div className={"roles_selection"}>
          <div className={"role_cards"}>{cards}</div>
          <div>
            <button type="button" onClick={this.startGame}>
              {"Start Game"}
            </button>
          </div>
        </div>
      );
    }
  }
});