import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  MemoryRouter,
} from "react-router-native";
import Home from "./Home";
import getConfirmation from "./getConfirmation";
import Workout from "./Workout";

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/workout" component={Workout} />
        </Switch>
      </div>
    );
  }
}
