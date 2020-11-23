import React, { Component } from 'react';

class SmallProduct extends Component {
  render() {
    const { image, seller, title, sale, price, point } = this.props.product;
    return (
      <div className='smallProductContainer' type='button'>
        <div className='smallProductImageBox'>
          <img src={image} className='productImage' alt='cardImage' />
        </div>
        <div className='smallProductSummeryBox'>
          <div className='smallProductSeller'>{seller}</div>
          <div className='smallProductTitle'>{title}</div>
          <div className='smallProductPriceBox'>
            <div className='smallProductSale'>{sale}</div>
            <div className='smallProductPrice'>{price}</div>
          </div>
          <div className='smallProductPointBox'>
            <div className='smallProductPoint'>
              <img
                src='/images/star.png'
                className='smallProductPointImage'
                alt='point'
              />
              {point}
            </div>
            <div className='smallProductReview'>리뷰 1,500</div>
          </div>
          <div className='smallProductLabelBox'>
            <img
              src='/images/freedelivery.png'
              className='smallProductFreeIcon'
              alt='lowprice'
            />
            <img
              src='/images/lowprice.png'
              className='smallProductLowPriceIcon'
              alt='lowprice'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SmallProduct;
