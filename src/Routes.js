import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import FeedDetail from "./pages/Community/FeedDetail/FeedDetail.js";
// import "/styles/common.scss";
// import "/styles/reset.scss";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FeedDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
