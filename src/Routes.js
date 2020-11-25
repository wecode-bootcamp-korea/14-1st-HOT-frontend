import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './pages/Category/Category';
import ProductDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/categories' component={Category} />
            <Route
              exact
              path='/categories?menu=1/:id'
              component={ProductDetail}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
