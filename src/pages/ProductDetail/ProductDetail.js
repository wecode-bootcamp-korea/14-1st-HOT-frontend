import React, { Component } from 'react';
import Nav from '../../component/NavigationBar/NavigationBar';
import Footer from '../../component/Footer/Footer';
import Overview from './Overview/Overview';
import Modal from '../../component/Modal/Modal';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      modalSwitch: false,
    };
  }

  handleModalSwitch = (e) => {
    e.preventDefault();
    this.setState({ modalSwitch: !this.state.modalSwitch });
  };

  render() {
    const { handleModalSwitch } = this;
    return (
      <div>
        {this.state.modalSwitch ? (
          <Modal takeModalEvent={handleModalSwitch} />
        ) : null}
        <Nav />
        <div className='ProductDetail'>
          <Overview takeModalEvent={handleModalSwitch} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
