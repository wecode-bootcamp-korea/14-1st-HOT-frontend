import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import posts from "./pages/PostDetail/PostDetail";
import FeedList from "./pages/Community/FeedList/FeedList";
import Signup from "./pages/Signup/Signup";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FeedList} />
          <Route exact path="/posts/:id" component={posts} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
