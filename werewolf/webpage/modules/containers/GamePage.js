var ReactRedux = require("react-redux");
var GameTable = require("../components/GameTable");

var mapStateToProps = function (state) {
  return {
    page: state.page,
    name: state.name,
    cards: state.cards
  };
};

module.exports = ReactRedux.connect(mapStateToProps)(GameTable);