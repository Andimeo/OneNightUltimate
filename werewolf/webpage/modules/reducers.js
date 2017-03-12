var Redux = require('redux');
var actions = require('./actions');
var initialCardState = {
  role: '',
  userName: '',
  isSelected: true,
  isEnableSelect: false
};

var initialState = {
  page: actions.PageStates.REGISTER,
  name: '',
  cards: [
    Object.assign({}, initialCardState, {userName: '1'}),
    Object.assign({}, initialCardState, {userName: '2'}),
    Object.assign({}, initialCardState, {userName: '3'}),
    Object.assign({}, initialCardState, {userName: '4'}),
    Object.assign({}, initialCardState, {userName: '5'}),
    Object.assign({}, initialCardState, {userName: '6'}),
    Object.assign({}, initialCardState, {userName: '7'}),
    Object.assign({}, initialCardState, {userName: '8'}),
    Object.assign({}, initialCardState),
    Object.assign({}, initialCardState),
    Object.assign({}, initialCardState)
  ]
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
  return state;
};

var name = function (state, action) {
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
  return state;
};

var cards = function (state, action) {
  if ((typeof state) === 'undefined') {
    return initialState.cards;
  }
  switch (action.type) {
    case actions.actionTypes.START_SELECTION:
      return state.map(function (card) {
        console.log(card);
        return Object.assign({}, card, {
          isSelected: false,
          isEnableSelect: true
        })
      });
    case actions.actionTypes.TOGGLE_SELECTION:
      return state.map(function (card, index) {
        if (index === action.index && card.isEnableSelect) {
          return Object.assign({}, card, {isSelected: !card.isSelected})
        }
        return card;
      });
    case actions.actionTypes.FINISH_SELECTION:
      return state.map(function (card) {
        return Object.assign({}, card, {
          isSelected: false,
          isEnableSelect: false
        })
      });
  }
  return state;
};

module.exports = Redux.combineReducers({page, name, cards});