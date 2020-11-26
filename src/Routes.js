import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./component/NavigationBar/NavigationBar";
// import Mypage from "./pages/Mypage/Mypage";
import Footer from "./component/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component="" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
