import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Categories from './pages/Category/Category';
// import Cart from './pages/ProductDetail/Overview/SelectOption/Cart/Cart';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={ProductDetail} />
            <Route exact path='/categories' component={Categories} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
