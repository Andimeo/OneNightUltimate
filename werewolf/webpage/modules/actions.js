var actionTypes = {
  DO_ENTER: "DO_ENTER",
  CONFIRM_ENTER: "CONFIRM_ENTER",

  GAME_BEGIN: "GAME_BEGIN",

  START_SELECTION: "START_SELECTION",
  TOGGLE_SELECTION: "TOGGLE_SELECTION",
  FINISH_SELECTION: "FINISH_SELECTION",

  START_SHOWING: "START_SHOWING",
  FINISH_SHOWING: "FINISH_SHOWING",

  RESTART_GAME: "RESTART_GAME"
};

var PageStates = {
  REGISTER_PAGE: "REGISTER_PAGE",
  ROLES_PAGE: "ROLES_PAGE",
  GAMING_PAGE: "GAMING_PAGE"
};

var actions = {
  doEnter: function (name) {
    return {type: actionTypes.DO_ENTER, name: name};
  },
  confirmEnter: function (isHost) {
    return {type: actionTypes.CONFIRM_ENTER, isHost: isHost};
  },
  gameBegin: function (players, myInfo) {
    // players = [{name}], myInfo = {index, role}
    return {type: actionTypes.GAME_BEGIN, players: players, myInfo: myInfo};
  },
  startSelection: function () {
    return {type: actionTypes.START_SELECTION};
  },
  toggleSelection: function (index) {
    return {type: actionTypes.TOGGLE_SELECTION, index: index};
  },
  finishSelection: function () {
    return {type: actionTypes.FINISH_SELECTION};
  },
  restartGame: function () {
    return {type: actionTypes.RESTART_GAME};
  }
};

module.exports = {
  actions: actions,
  actionTypes: actionTypes,
  PageStates: PageStates
};