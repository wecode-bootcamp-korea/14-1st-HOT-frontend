import React, { Component } from 'react';
import ProductOptions from './ProductOptions/ProductOptions';
import './Product.scss';

class Product extends Component {
  render() {
    const { product_name, seller, options } = this.props.product;
    return (
      <div className='Product'>
        <div className='productTitle flexBox'>{seller}</div>
        <div className='productCheckBox flexBox'>
          <input type='checkbox' classname='product' id='product' />
          <label for='product'></label>
        </div>
        <div className='deleteBox flexBox'>X</div>
        <div className='product'>
          <div className='productOptionBox'>
            <div className='productImageBox'>
              <img
                src='/images/princessMin2.jpg'
                className='ProductImage'
                alt='productImage'
              />
            </div>
            <div className='flexTitle'>
              <div className='title'>{product_name}</div>
              <div className='titleOption'>판매자직접배송 | 무료배송</div>
            </div>
          </div>
          {options.length &&
            options.map((option) => <ProductOptions option={option} />)}
        </div>
        <div className='flexTotalBox'>
          <div className='optionChange'>옵션 변경 | 바로 구매</div>
          <div className='totalCalculation'>
            {options.length &&
              options
                .reduce(
                  (accumulator, currentValue) =>
                    accumulator +
                    parseInt(currentValue.price * currentValue.count),
                  0
                )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
          </div>
        </div>
        <div className='deleveryCharge flexBox'>배송비 무료</div>
      </div>
    );
  }
}

export default Product;
