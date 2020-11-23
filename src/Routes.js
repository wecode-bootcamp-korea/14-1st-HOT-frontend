import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "./pages/Login/Login";
=======
import PostDetail from "./pages/PostDetail/PostDetail";
>>>>>>> master

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/login" component={Login} />
=======
          <Route exact path="/" component={PostDetail} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}

export default Routes;
