var actionTypes = {
  DO_ENTER: "DO_ENTER",
  START_GAME: "START_GAME",
  BACK_TO_ROOM: "BACK_TO_ROOM",

  START_SELECTION: "START_SELECTION",
  TOGGLE_SELECTION: "TOGGLE_SELECTION",
  FINISH_SELECTION: "FINISH_SELECTION"
};

var PageStates = {
  REGISTER: "REGISTER",
  ROOM: "ROOM",
  GAMING: "GAMING"
};

var actions = {
  doEnter: function (name) {
    return {type: actionTypes.DO_ENTER, name: name};
  },
  startGame: function () {
    return {type: actionTypes.START_GAME};
  },
  backToRoom: function () {
    return {type: actionTypes.BACK_TO_ROOM};
  },
  startSelection: function () {
    return {type: actionTypes.START_SELECTION};
  },
  toggleSelection: function (index) {
    return {type: actionTypes.TOGGLE_SELECTION, index: index};
  },
  finishSelection: function () {
    return {type: actionTypes.FINISH_SELECTION};
  }
};

module.exports = {
  actions: actions,
  actionTypes: actionTypes,
  PageStates: PageStates
};