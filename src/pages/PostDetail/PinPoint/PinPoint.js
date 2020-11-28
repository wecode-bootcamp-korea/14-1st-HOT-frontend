import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LinkedProduct from './LinkedProduct';
import { FcPlus } from 'react-icons/fc';
import './PinPoint.scss';

class PinPoint extends Component {
  constructor() {
    super();
    this.state = {
      isproductHide: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isproductHide: true });
  };
  handleMouseLeave = () => {
    this.setState({ isproductHide: false });
  };

  render() {
    const { productId, imageURL, productName } = this.props;
    console.log(this.state.isproductHide);
    return (
      <div
        className='pinWrap'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <FcPlus className='circlePlus' />
        <div>
          <LinkedProduct
            className='linkedProduct'
            isproductHide={this.state.isproductHide}
            productId={productId}
            imageURL={imageURL}
            productName={productName}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PinPoint);
