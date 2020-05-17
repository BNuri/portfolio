import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import reducer from "./reducer";
import store from "./store";
import routeConfig from "./routeConfig";

const renderAfterPreload = async () => {
  const promises = [];
  routeConfig.forEach((route) => {
    if (route.component.preloadComponent) {
      const p = route.component.preloadComponent();
      promises.push(p);
    }
  });
  try {
    await Promise.all(promises);
  } catch (e) {
    console.warn(e);
  }
};

ReactDOM.render(
  <Provider store={store(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

renderAfterPreload();
