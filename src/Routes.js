import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./component/NavigationBar/NavigationBar";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/nav" component={NavigationBar} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
