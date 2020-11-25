import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ProductList from '../src/pages/Category/ProductList/ProductList';
import Category from './pages/Category/Category';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Category} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
