var ReactRedux = require("react-redux");
var actions = require("../actions");
var Card = require("../components/Card");

var mapStateToProps = function (state) {
  return {};
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleSelection: function() {
      if (ownProps.isEnableSelect) {
        dispatch(actions.actions.toggleSelection(ownProps.index));
      }
    }
  };
};

module.exports = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);