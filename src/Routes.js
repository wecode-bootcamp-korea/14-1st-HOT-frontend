import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Community from "./pages/Community/Community";
import Signup from "./pages/Signup/Signup";
=======
import PostDetail from "./pages/PostDetail/PostDetail";
>>>>>>> master

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Community} />
          <Route exact path="/signup" component={Signup} />
=======
          <Route exact path="/" component={PostDetail} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}

export default Routes;
