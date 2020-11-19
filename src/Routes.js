import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import Login from "./pages/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Community} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
