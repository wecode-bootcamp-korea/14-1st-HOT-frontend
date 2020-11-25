import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Agree from './pages/Signup/Agree';
import Cart from './pages/ProductDetail/Overview/SelectOption/Cart/Cart';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/productdetail' component={ProductDetail} />
          <Route exact path='/agree' component={Agree} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
