import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <div className='productContainer' type='button'>
        <div className='productImageBox'>
          <img
            src={this.props.product.image}
            className='productImage'
            alt='cardImage'
          />
        </div>
        <div className='productSummeryBox'>
          <div className='productSeller'>{this.props.product.seller}</div>
          <div className='productTitle'>{this.props.product.title}</div>
          <div className='productPriceBox'>
            <div className='productSale'>{this.props.product.sale}</div>
            <div className='productPrice'>{this.props.product.price}</div>
          </div>
          <div className='productPointBox'>
            <div className='productPoint'>
              <img
                src='/images/star.png'
                className='productPointImage'
                alt='point'
              />
              {this.props.product.point}
            </div>
            <div className='productReview'>리뷰 1,500</div>
          </div>
          <div className='labelBox'>
            <img
              src='/images/freedelivery.png'
              className='freeIcon'
              alt='lowprice'
            />
            <img
              src='/images/lowprice.png'
              className='lowPriceIcon'
              alt='lowprice'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
