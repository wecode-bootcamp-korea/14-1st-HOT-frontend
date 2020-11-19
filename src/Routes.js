import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Community from "./pages/Community/Community";
import Footer from "./component/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Community} />
            <Route exact path="/footer" component={Footer} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
