import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail/PostDetail";
import Footer from "./component/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={PostDetail} />
            <Route exact path="/Footer" component={Footer} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
