import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import post from "./pages/PostDetail/PostDetail";
import FeedList from "./pages/Community/FeedList/FeedList";
import PinPoint from "./pages/PostDetail/PinPoint/PinPoint";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PinPoint} />
          <Route exact path="/FeedList" component={FeedList} />
          <Route exact path="/posts/:id" component={post} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
