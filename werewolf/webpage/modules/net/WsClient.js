var actions = require('../actions');
module.exports = function (dispatch) {
  var onMessage = function (data) {
    switch (data.type) {
      case actions.actionTypes.CONFIRM_ENTER:
        dispatch(actions.actions.confirmEnter(data.isHost));
        break;
    }
  };

  var send = function (data) {
    // emulated response
    switch (data.type) {
      case actions.actionTypes.DO_ENTER:
        setTimeout(function() {
          dispatch({type: actions.actionTypes.CONFIRM_ENTER, isHost: true})
        }, 1);
        break;
      case actions.actionTypes.FINISH_SELECTION:
      case actions.actionTypes.RESTART_GAME:
        setTimeout(function() {
          dispatch({
            type: actions.actionTypes.GAME_BEGIN,
            players: [
              {name: "1"},
              {name: "2"},
              {name: "3"},
              {name: "4"},
              {name: "5"},
              {name: "6"},
              {name: "7"},
              {name: "8"}
            ],
            myInfo: {index: Math.round(Math.random() * 7), role: "强盗"}})
        });
    }
  };

  return {
    send: send,
    onMessage: onMessage
  }
};