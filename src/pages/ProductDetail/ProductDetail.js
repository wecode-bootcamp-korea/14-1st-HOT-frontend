import React, { Component } from 'react';
import Nav from '../../component/NavigationBar/NavigationBar';
import Footer from '../../component/Footer/Footer';
import Overview from './Overview/Overview';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='ProductDetail'>
          <Overview />
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
