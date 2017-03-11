var ReactRedux = require('react-redux');
var GameTable = require('../components/GameTable');

var mapStateToProps = function (state) {
  return {
    page: state.page,
    name: state.name
  };
};

module.exports = ReactRedux.connect(mapStateToProps)(GameTable);