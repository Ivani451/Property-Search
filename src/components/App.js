import React, { Component, Fragment } from "react";
import Home from "./Home";
import NavBar from "./Navbar";

import RentalsList from "../containers/RentalsList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

class App extends Component {
  // the React.Fragment element replaced a div. The div was replaced because you get an error
  // if you put a div inside a Switch element
  render() {
    return (
      <Router>
        <Switch>
          <Fragment>
            <NavBar />
            <Route exact strict path="/" component={withRouter(Home)} />
            <Route
              exact
              strict
              path="/for_rent/:city_name"
              component={withRouter(RentalsList)}
            />

            <Route path="/" />
          </Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
