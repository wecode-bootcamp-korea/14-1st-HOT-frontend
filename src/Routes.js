import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeedList from "./pages/Community/FeedList/FeedList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FeedList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
