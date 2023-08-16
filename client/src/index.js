import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import reducers from "./reducers";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
