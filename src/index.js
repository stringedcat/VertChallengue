import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { Provider } from "react-redux";
import Store from "../src/store.js";
ReactDOM.render(
  <Provider store={Store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
