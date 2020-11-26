<<<<<<< HEAD
import React, { Component } from 'react';
import Footer from '../../component/Footer/Footer';
import Overview from './Overview/Overview';
import Modal from '../../component/Modal/Modal';
import NavigationBar from '../../component/NavigationBar/NavigationBar';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      modalSwitch: false,
    };
  }

  handleModalSwitch = () => {
    this.setState({ modalSwitch: !this.state.modalSwitch });
  };

  render() {
    const { handleModalSwitch } = this;
    console.log(this.state.SelectedProducts);
    return (
      <div>
        {this.state.modalSwitch ? (
          <Modal takeModalEvent={handleModalSwitch} />
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
=======
>>>>>>> master
