import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "../Routes/Projects";
import About from "./About";
import Contact from "./Contact";

export default () => (
  <Router>
    <>
      <Header />
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
