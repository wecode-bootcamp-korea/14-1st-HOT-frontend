import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mypage from "./pages/Mypage/Mypage";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/mypage" component={Mypage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
