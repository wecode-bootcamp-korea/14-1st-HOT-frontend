import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Community from './pages/Community/Community';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Community} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
