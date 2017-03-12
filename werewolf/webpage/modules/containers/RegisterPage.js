var ReactRedux = require('react-redux');
var RegisterForm = require('../components/RegisterForm');

var mapStateToProps = function (state) {
  return {
    page: state.page
  };
};

module.exports = ReactRedux.connect(mapStateToProps)(RegisterForm);