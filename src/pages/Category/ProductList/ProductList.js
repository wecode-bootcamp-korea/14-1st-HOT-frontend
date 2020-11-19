import React, { Component } from 'react';
import Product from './Product/Product';
import RandomProduct from './RandomProducts/RandomProducts';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      randomProducts: [],
    };
  }

  componentDidMount() {
    this.getProductList();
  }

  getProductList = () => {
    fetch('/Data/product.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          products: res.products,
        });
      });
  };

  render() {
    const buttonText = ['색상', '우드톤', '소재', '사용 인원', '가격', '배송'];
    const { products } = this.state;
    return (
      <>
        <div className='mdPickTextBox'>
          <div className='mdPickText'>MD's PICK</div>
        </div>
        <div className='smallProductList'>
          {/* 샘플로 원래 Product 넣어듬, 랜덤으로 보여줄 State로 변경 예정 */}
          {products.map((productElement, productIndex) => (
            <RandomProduct key={productIndex} product={productElement} />
          ))}
        </div>
        <div className='productFilterButtonBox'>
          {buttonText.map((buttonTextElement, buttonTextIndex) => (
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
            <span>전체</span>
            <span className='poductCount'> 1,394</span>
            <span>개</span>
          </div>
          <div className='popularSerch'>
            <span>인기순 </span>
            <span>
              <img
                src='/images/showIcon.png'
                className='serchBoxIcon'
                alt='showIcon'
              />
            </span>
          </div>
        </div>
        <div className='productList'>
          {products.map((productElement, productIndex) => (
            <Product key={productIndex} product={productElement} />
          ))}
        </div>
      </>
    );
  }
}

export default ProductList;
