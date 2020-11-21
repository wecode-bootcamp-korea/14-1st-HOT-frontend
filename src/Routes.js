import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import Posting from "./pages/Posting/Posting";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Community} />
            <Route exact path="/posting" component={Posting} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
