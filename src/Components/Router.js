import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import { Home, Projects, About, Contact } from "../Screens";

export default () => (
  <Router>
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
