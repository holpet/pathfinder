import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { transitions, positions } from "react-alert";
import "./index.css";
import App from "./app/App.js";
import * as serviceWorker from "./app/serviceWorker";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

ReactDOM.render(
  //<React.StrictMode>
  <App />,
  //</React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
