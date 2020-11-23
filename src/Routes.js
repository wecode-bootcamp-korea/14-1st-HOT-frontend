import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail/PostDetail";
import Nav from "./component/NavigationBar/NavigationBar";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={PostDetail} />
            <Route exact path="/nav" component={Nav} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
