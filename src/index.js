import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import reducer from "./reducer";
import store from "./store";

ReactDOM.render(
  <Provider store={store(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
