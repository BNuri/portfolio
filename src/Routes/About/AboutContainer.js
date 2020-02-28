import React from "react";
import AboutPresenter from "./AboutPresenter";

export default class extends React.Component {
  state = {
    loading: true,
    error: null
  };
  render() {
    return <AboutPresenter />;
  }
}
