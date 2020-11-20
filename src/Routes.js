import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import PostDetail from "./pages/Community/PostDetail/PostDetail.js";
// import "/styles/common.scss";
// import "/styles/reset.scss";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PostDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
