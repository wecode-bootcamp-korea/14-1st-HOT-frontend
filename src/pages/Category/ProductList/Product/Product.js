import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  goProductDetail = () => {
    this.props.history.push(
      `http://10.58.1.135:8000/store/categories?menu=1/${this.props.product_id}`
    );
  };
  render() {
    return (
      <button className='productContainer' onClick={this.goProductDetail}>
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
      </button>
    );
  }
}

export default Product;
