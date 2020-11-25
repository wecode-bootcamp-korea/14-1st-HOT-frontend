import React, { Component } from 'react';
import ProductOptions from './ProductOptions/ProductOptions';
import './Product.scss';

class Product extends Component {
  render() {
    const { product_name, seller, value } = this.props.product;
    const { product } = this.props;
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
                src='/images/post1.png'
                className='ProductImage'
                alt='productImage'
              />
            </div>
            <div className='flexTitle'>
              <div className='title'>{product_name}</div>
              <div className='titleOption'>판매자직접배송 | 무료배송</div>
            </div>
          </div>
          {product &&
            product.map((product) => <ProductOptions option={product} />)}
        </div>
        <div className='flexTotalBox'>
          <div className='optionChange'>옵션 변경 | 바로 구매</div>
          <div className='totalCalculation'>{value + '원'}</div>
        </div>
        <div className='deleveryCharge flexBox'>배송비 무료</div>
      </div>
    );
  }
}

export default Product;
