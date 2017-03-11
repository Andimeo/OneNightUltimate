var ReactRedux = require('react-redux');
var GameRoom = require('../components/GameRoom');

var mapStateToProps = function (state) {
  return {
    page: state.page,
    name: state.name
  };
};

module.exports = ReactRedux.connect(mapStateToProps)(GameRoom);