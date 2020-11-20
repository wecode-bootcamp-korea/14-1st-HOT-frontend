import React, { Component } from 'react';
import Nav from '../../component/NavigationBar/NavigationBar';
import Infomation from './Infomation/Infomation';
import Overview from './Overview/Overview';

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='ProductDetail'>
          <Overview />
          <Infomation />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
