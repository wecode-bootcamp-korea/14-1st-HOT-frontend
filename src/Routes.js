import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./component/NavigationBar/NavigationBar";
// import Mypage from "./pages/Mypage/Mypage";
import Footer from "./component/Footer/Footer";
import posts from "./pages/PostDetail/PostDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/posts/:id" component={posts} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
