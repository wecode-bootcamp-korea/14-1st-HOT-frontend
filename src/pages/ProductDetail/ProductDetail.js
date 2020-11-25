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

  handleModalSwitch = () => {
    this.setState({ modalSwitch: !this.state.modalSwitch });
  };

  postCartInfo = (e, giveSelectedProducts) => {
    e.preventDefault();
    this.setState({ SelectedProducts: giveSelectedProducts });
    this.setState({ modalSwitch: !this.state.modalSwitch });
    fetch('http://10.58.5.85:8000/order/cart', {
      method: 'POST',
      body: JSON.stringify(this.state.SelectedProducts),
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OH0.ecppyTUzWqWfOQqDFGN8X3F4jvk19zd-MaIGxYd0PrQ',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  render() {
    const { SelectedProducts } = this.state;
    const { handleModalSwitch, postCartInfo } = this;
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
          <Overview takeModalEvent={postCartInfo} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
