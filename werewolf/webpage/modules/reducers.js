var Redux = require('redux');
var actions = require('./actions');

var initialState = {
  page: actions.PageStates.REGISTER,
  name: ''
};

var page = function (state, action) {
  if ((typeof state) === 'undefined') {
    return initialState.page;
  }
  switch (action.type) {
    case actions.actionTypes.DO_ENTER:
      return actions.PageStates.ROOM;
    case actions.actionTypes.START_GAME:
      return actions.PageStates.GAMING;
    case actions.actionTypes.BACK_TO_ROOM:
      return actions.PageStates.ROOM;
  }
};

var name = function(state, action) {
  if ((typeof state) === 'undefined') {
    return initialState.name;
  }
  switch (action.type) {
    case actions.actionTypes.DO_ENTER:
      return action.name;
    case actions.actionTypes.START_GAME:
    case actions.actionTypes.BACK_TO_ROOM:
      return state;
  }
};

module.exports = Redux.combineReducers({page, name});