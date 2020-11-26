import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  goProductDetail = () => {
    this.props.history.push(
      `http://10.58.1.135:8000/store/categories?menu=1/${this.props.product_id}`
    );
  };
  render() {
    const {
      product,
      product_image,
      product_seller,
      product_price,
      number_of_reviews,
    } = this.props.product;
    return (
      <button className='productContainer' onClick={this.goProductDetail}>
        <div className='productImageBox'>
          <img src={product_image} className='productImage' alt='cardImage' />
        </div>
        <div className='productSummeryBox'>
          <div className='productSeller'>{product_seller}</div>
          <div className='productTitle'>{product}</div>
          <div className='productPriceBox'>
            <div className='productSale'>{'10%'}</div>
            <div className='productPrice'>
              {product_price &&
                parseInt(product_price[0])
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
            </div>
          </div>
          <div className='productPointBox'>
            <div className='productPoint'>
              <img
                src='/images/star.png'
                className='productPointImage'
                alt='point'
              />
              {''}
            </div>
            <div className='productReview'>
              {'리뷰 ' + number_of_reviews + '개'}
            </div>
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
