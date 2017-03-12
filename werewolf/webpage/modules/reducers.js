var Redux = require("redux");
var actions = require("./actions");
var initialCardState = {
  role: "",
  userName: "",
  isSelected: false,
  isEnableSelect: false
};

var initialState = {
  page: actions.PageStates.REGISTER_PAGE,
  name: "",
  cards: []
};

var page = function (state, action) {
  if ((typeof state) === "undefined") {
    return initialState.page;
  }
  switch (action.type) {
    case actions.actionTypes.DO_ENTER:
    case actions.actionTypes.RESTART_GAME:
      window.client.send(action);
      break;
    case actions.actionTypes.CONFIRM_ENTER:
      if (action.isHost) {
        return actions.PageStates.ROLES_PAGE;
      } else {
        return actions.PageStates.GAMING_PAGE;
      }
    case actions.actionTypes.GAME_BEGIN:
      return actions.PageStates.GAMING_PAGE;
  }
  return state;
};

var name = function (state, action) {
  if ((typeof state) === "undefined") {
    return initialState.name;
  }
  switch (action.type) {
    case actions.actionTypes.DO_ENTER:
      return action.name;
  }
  return state;
};

var cards = function (state, action) {
  if ((typeof state) === "undefined") {
    return initialState.cards;
  }
  switch (action.type) {
    case actions.actionTypes.CONFIRM_ENTER:
      if (action.isHost) {
        return ["化身幽灵", "狼人", "狼人", "爪牙", "守夜人", "守夜人", "预言家",
          "强盗", "捣蛋鬼", "酒鬼", "失眠者", "村民", "村民", "村民", "皮匠",
          "猎人"].map(function (role) {
            return Object.assign({}, initialCardState, {
              role: role,
              isEnableSelect: true
            });
          });
      }
      break;
    case actions.actionTypes.GAME_BEGIN:
      return action.players.map(function (player, index) {
        if (index === action.myInfo.index) {
          return Object.assign({}, initialCardState, {
            userName: player.name,
            role: action.myInfo.role
          });
        } else {
          return Object.assign({}, initialCardState, {
            userName: player.name
          });
        }
      }).concat([
        Object.assign({}, initialCardState),
        Object.assign({}, initialCardState),
        Object.assign({}, initialCardState)
      ]);
    case actions.actionTypes.START_SELECTION:
      return state.map(function (card) {
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
      var selectedIndex = state.map(function (card, index) {
        if (card.isSelected) {
          return index;
        }
      });
      window.client.send({type: action.type, selectedIndex: selectedIndex});
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