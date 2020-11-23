import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import FeedList from "./pages/Community/FeedList/FeedList";

import Category from "./pages/Category/Category";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={FeedList} />

            <Route exact path="/" component={Category} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
