var ReactRedux = require("react-redux");
var actions = require("../actions");
var GameTable = require("../components/GameTable");

var mapStateToProps = function (state) {
  return {
    page: state.page,
    name: state.name,
    cards: state.cards
  };
};

var mapDispatchToProps = function (dispatch, ownProps) {
  return {
    restartGame: function() {
      dispatch(actions.actions.restartGame());
    }
  };
};

module.exports = ReactRedux.connect(
  mapStateToProps, mapDispatchToProps)(GameTable);