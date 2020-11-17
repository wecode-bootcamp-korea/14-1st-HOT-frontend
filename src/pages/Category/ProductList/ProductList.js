import React, { Component } from 'react';
import Product from './Product/Product';
import SmallProduct from './SmallProducts/SmallProduct';

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
          {products.map((ele) => (
            <SmallProduct product={ele} />
          ))}
        </div>
        <div className='productFilterButtonBox'>
          {buttonText.map((ele) => (
            <div className='productFilterButtons'>
              <button className='productFilterButton'>
                <span>{ele}</span>
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
          {products.map((ele) => (
            <Product product={ele} />
          ))}
        </div>
      </>
    );
  }
}

export default ProductList;
