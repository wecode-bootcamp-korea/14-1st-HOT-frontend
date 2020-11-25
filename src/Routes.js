import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
// import Cart from './pages/ProductDetail/Overview/SelectOption/Cart/Cart';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={ProductDetail} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
