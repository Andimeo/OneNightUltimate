var actionTypes = {
  DO_ENTER: 'DO_ENTER',
  TOGGLE_READY: 'TOGGLE_READY',
  START_GAME: 'START_GAME',
  BACK_TO_ROOM: 'BACK_TO_ROOM'
};

var PageStates = {
  REGISTER: 'REGISTER',
  ROOM: 'ROOM',
  GAMING: 'GAMING'
};

var actions = {
  doEnter: function(name) {
    return {type: actionTypes.DO_ENTER, name: name}
  },
  toggleReady: function() {
    return {type: actionTypes.TOGGLE_READY}
  },
  startGame: function() {
    return {type: actionTypes.START_GAME}
  },
  backToRoom: function() {
    return {type: actionTypes.BACK_TO_ROOM}
  }

};

module.exports = {
  actions: actions,
  actionTypes: actionTypes,
  PageStates: PageStates
};