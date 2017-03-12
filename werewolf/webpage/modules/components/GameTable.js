require("./GameTable.css");
var React = require("react");
var actions = require("../actions");
var WrappedCard = require("../containers/WrappedCard");

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
    ),
    restartGame: React.PropTypes.func.isRequired
  },
  restartGame: function (e) {
    e.preventDefault();
    this.props.restartGame();
  },
  render: function () {
    if (this.props.page !== actions.PageStates.GAMING_PAGE) {
      return null;
    } else {
      var playerNumber = this.props.cards.length - 3;
      var allCards = this.props.cards.map(function (card, index) {
        return (
          <WrappedCard key={index} index={index} userName={card.userName}
                role={card.role} isSelected={card.isSelected}
                isEnableSelect={card.isEnableSelect}/>
        );
      });
      var upperCards = allCards.slice(0, playerNumber / 2);
      var lowerCards = allCards.slice(playerNumber / 2, playerNumber);
      var middleCards = allCards.slice(playerNumber, allCards.length);
      return (
        <div className={"game_table"}>
          <div className={"cards upper"}>{upperCards}</div>
          <div className={"cards middle"}>{middleCards}</div>
          <div className={"cards lower"}>{lowerCards}</div>
          <div>
            <button type="button" onClick={this.restartGame}>
              {"Restart Game"}
            </button>
          </div>
        </div>
      );
    }
  }
});