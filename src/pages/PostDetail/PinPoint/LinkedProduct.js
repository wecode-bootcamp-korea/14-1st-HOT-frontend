import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './LinkedProduct.scss';

class LinkedProduct extends Component {
  goToProduct = () => {
    this.props.history.push(`/store/${this.props.productId}`);
  };
  render() {
    const { isproductHide, imageURL, productName } = this.props;
    return (
      <div className='LinkedProduct' onClick={this.goToProduct}>
        <div className={isproductHide ? 'show' : 'hide'}>
          <div className='productImage'>
            <img className='imageURL' src={imageURL} alt='' />
          </div>
          <div className='productInfo'>{productName}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(LinkedProduct);
