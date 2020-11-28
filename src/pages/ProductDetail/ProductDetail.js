import React, { Component } from 'react';
import Overview from './Overview/Overview';
import Modal from '../../component/Modal/Modal';

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
    return (
      <div>
        {this.state.modalSwitch ? (
          <Modal takeModalEvent={handleModalSwitch} />
        ) : null}
        <div className='ProductDetail'>
          <Overview takeModalEvent={handleModalSwitch} />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
