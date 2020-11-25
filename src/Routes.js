import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './pages/Category/Category';
// import ProductList from './pages/Category/ProductList/ProductList';
// import Signup from './pages/Signup/Signup';
// import Login from './pages/Login/Login';
// import Agree from './pages/Signup/Agree';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Category} />
          {/* <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/productlist' component={ProductList} />
          <Route exact path='/agree' component={Agree} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
