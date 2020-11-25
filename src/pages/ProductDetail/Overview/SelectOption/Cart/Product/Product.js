import React, { Component } from 'react';
import ProductOptions from './ProductOptions/ProductOptions';
import './Product.scss';

class Product extends Component {
  render() {
    return (
      <div className='Product'>
        <div className='productTitle flexBox'>나무숲가구</div>
        <div className='productCheckBox flexBox'>
          <input type='checkbox' classname='product' id='product' />
          <label for='product'></label>
        </div>
        <div className='deleteBox flexBox'>X</div>
        <div className='product'>
          <div className='productOptionBox'>
            <div className='productImageBox'>
              <img
                src='/images/post1.png'
                className='ProductImage'
                alt='productImage'
              />
            </div>
            <div className='flexTitle'>
              <div className='title'>레브 리프트업 협탁</div>
              <div className='titleOption'>판매자직접배송 | 무료배송</div>
            </div>
          </div>
          <ProductOptions />
          <ProductOptions />
          <ProductOptions />
        </div>
        <div className='flexTotalBox'>
          <div className='optionChange'>옵션 변경 | 바로 구매</div>
          <div className='totalCalculation'>3,200,000원</div>
        </div>
        <div className='deleveryCharge flexBox'>배송비 무료</div>
      </div>
    );
  }
}

export default Product;
