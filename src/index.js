import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import reducer from "./reducer";
import store from "./store";
import routeConfig from "./routeConfig";
import { matchPath } from "react-router-dom";

const renderAfterPreload = async () => {
  const promises = [];
  routeConfig.forEach((route) => {
    const match = matchPath(window.location.pathname, route);
    console.log(window.location.pathname);
    console.log(match);
    console.log(route);
    console.log(route.component);
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
