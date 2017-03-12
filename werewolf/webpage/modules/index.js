require("./index.css");
var WsClient = require("./net/WsClient");
var React = require("react");
var ReactDOM = require("react-dom");
var Redux = require("redux");
var ReactRedux = require("react-redux");
var App = require("./components/App");
var reducers = require("./reducers");

var store = Redux.createStore(reducers);

window.client = WsClient(store.dispatch);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>, document.getElementById("app"));