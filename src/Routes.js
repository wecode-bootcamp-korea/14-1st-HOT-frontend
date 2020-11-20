import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import Signup from "./pages/Signup/Signup";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Community} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
