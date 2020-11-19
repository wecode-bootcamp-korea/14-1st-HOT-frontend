import React, { Component } from 'react';
import './RandomProducts.scss';

class RandomProducts extends Component {
  render() {
    const { image, seller, title, sale, price, point } = this.props.product;
    return (
      <div className='randomProductContainer' type='button'>
        <div className='randomProductImageBox'>
          <img src={image} className='randomProductImage' alt='cardImage' />
        </div>
        <div className='randomProductSummeryBox'>
          <div className='randomProductSeller'>{seller}</div>
          <div className='randomProductTitle'>{title}</div>
          <div className='randomProductPriceBox'>
            <div className='randomProductSale'>{sale}</div>
            <div className='randomProductPrice'>{price}</div>
          </div>
          <div className='randomProductPointBox'>
            <div className='randomProductPoint'>
              <img
                src='/images/star.png'
                className='randomProductPointImage'
                alt='point'
              />
              {point}
            </div>
            <div className='randomProductReview'>리뷰 1,500</div>
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

export default RandomProducts;
