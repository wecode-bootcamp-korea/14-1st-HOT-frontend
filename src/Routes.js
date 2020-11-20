import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './pages/Category/Category';
// import ProductDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Category} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
