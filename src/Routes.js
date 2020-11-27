import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Cart from './pages/ProductDetail/Overview/SelectOption/Cart/Cart';
import Category from './pages/Category/Category';
import NavigationBar from './component/NavigationBar/NavigationBar';
import Footer from './component/Footer/Footer';
import Mypage from './pages/Mypage/Mypage';
// import FeedList from './pages/Community/FeedList/FeedList';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Category} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/store/:id' component={ProductDetail} />
          <Route exact path='/category' component={Category} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/mypage' component={Mypage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
