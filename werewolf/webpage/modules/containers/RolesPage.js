var ReactRedux = require("react-redux");
var actions = require("../actions");
var RolesSelection = require("../components/RolesSelection");

var mapStateToProps = function (state) {
  return {
    page: state.page,
    name: state.name,
    cards: state.cards
  };
};

var mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleSelection: function () {
      if (ownProps.isEnableSelect) {
        dispatch(actions.actions.toggleSelection(ownProps.index));
      }
    },
    startGame: function() {
      dispatch(actions.actions.finishSelection());
    }
  };
};

module.exports = ReactRedux.connect(
  mapStateToProps, mapDispatchToProps)(RolesSelection);