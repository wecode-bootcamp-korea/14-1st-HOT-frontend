import React, { Component } from 'react';
// import Nav from '../../component/NavigationBar/NavigationBar';
import Footer from '../../component/Footer/Footer';
import Overview from './Overview/Overview';
import Modal from '../../component/Modal/Modal';
import NavigationBar from '../../component/NavigationBar/NavigationBar';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      modalSwitch: false,
      SelectedProducts: [],
    };
  }

  handleModalSwitch = (e, giveSelectedProducts) => {
    e.preventDefault();
    this.setState({ modalSwitch: !this.state.modalSwitch });
    this.setState({ SelectedProducts: giveSelectedProducts });
  };

  render() {
    const { SelectedProducts } = this.state;
    const { handleModalSwitch } = this;
    console.log(this.state.SelectedProducts);
    return (
      <div>
        {this.state.modalSwitch ? (
          <Modal
            giveSelectedProductInfo={SelectedProducts}
            takeModalEvent={handleModalSwitch}
          />
        ) : null}
        <NavigationBar />
        <div className='ProductDetail'>
          <Overview takeModalEvent={handleModalSwitch} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
