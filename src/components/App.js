import React, { Component, Fragment } from "react";
import Home from "./Home";
import RentalsListSearch from "../containers/RentalsListSearch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

class App extends Component {
  // the React.Fragment element replaced a div. The div was replalced because you get an error
  // if you put a div inside a Switch element
  render() {
    return (
      <Router>
        <Switch>
          <Fragment>
            <Route exact strict path="/" component={withRouter(Home)} />

            <Route
              exact
              strict
              path="/for_rent"
              component={withRouter(RentalsListSearch)}
            />
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
