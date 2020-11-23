import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import PostDetail from "./pages/PostDetail/PostDetail";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={PostDetail} />
            <Route exact path="/footer" component={Footer} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
