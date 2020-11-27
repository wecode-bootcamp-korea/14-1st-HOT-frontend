import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './RandomProducts.scss';
// import { API } from '../../../../config';

class RandomProducts extends Component {
  goProductDetail = () => {
    this.props.history.push(`/store/${this.props.product.product_id}`);
  };

  render() {
    const {
      product_image,
      product_seller,
      product,
      number_of_reviews,
      product_price,
    } = this.props.product;
    return (
      <div
        className='randomProductContainer'
        type='button'
        onClick={this.goProductDetail}>
        <div className='randomProductImageBox'>
          <img
            src={product_image}
            className='randomProductImage'
            alt='cardImage'
          />
        </div>
        <div className='randomProductSummeryBox'>
          <div className='randomProductSeller'>{product_seller}</div>
          <div className='randomProductTitle'>{product}</div>
          <div className='randomProductPriceBox'>
            <div className='randomProductSale'>{'10%'}</div>
            <div className='randomProductPrice'>
              {product_price &&
                parseInt(product_price[0])
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
            </div>
          </div>
          <div className='randomProductPointBox'>
            <div className='randomProductPoint'>
              <img
                src='/images/star.png'
                className='randomProductPointImage'
                alt='point'
              />
              {''}
            </div>
            <div className='randomProductReview'>
              {'리뷰 ' + number_of_reviews + '개'}
            </div>
          </div>
          <div className='randomProductLabelBox'>
            <img
              src='/images/freedelivery.png'
              className='randomProductFreeIcon'
              alt='lowprice'
            />
            <img
              src='/images/lowprice.png'
              className='randomProductLowPriceIcon'
              alt='lowprice'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RandomProducts);
