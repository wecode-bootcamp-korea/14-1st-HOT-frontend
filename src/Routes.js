import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import Nav from "./component/NavigationBar/NavigationBar";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Community} />
            <Route exact path="/nav" component={Nav} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
