import React, { Component } from 'react';
import Product from './Product/Product';
import RandomProduct from './RandomProducts/RandomProducts';
import './ProductList.scss';

const BUTTONTEXT = ['색상', '우드톤', '소재', '사용 인원', '가격', '배송'];

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }

  render() {
    const { giveCatProduct, giveSubProduct } = this.props;
    return (
      <>
        <div className='mdPickTextBox'>
          <div className='mdPickText'>CATEGORY</div>
        </div>
        <div className='smallProductList'>
          {giveCatProduct.length &&
            giveCatProduct.map((productElement, productIndex) => (
              <RandomProduct key={productIndex} product={productElement} />
            ))}
        </div>
        <div className='productFilterButtonBox'>
          {BUTTONTEXT.map((buttonTextElement, buttonTextIndex) => (
            <div key={buttonTextIndex} className='productFilterButtons'>
              <button className='productFilterButton'>
                <span>{buttonTextElement}</span>
                <img
                  src='/images/showIcon.png'
                  className='filterButton'
                  alt='filterButton'
                />
              </button>
            </div>
          ))}
        </div>
        <div className='productInfoBox'>
          <div className='productCountBox'>
            <span>SUB CATEGORY</span>
          </div>
        </div>
        <div className='productList'>
          {giveSubProduct.map((productElement, productIndex) => (
            <Product key={productIndex} product={productElement} />
          ))}
        </div>
      </>
    );
  }
}

export default ProductList;
