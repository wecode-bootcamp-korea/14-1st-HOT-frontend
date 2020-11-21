import React, { Component } from 'react';
import './SelectedProduct.scss';

class SelectedProduct extends Component {
  getProductCount = (e) => {
    this.props.product = e.target.value;
  };
  render() {
    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { label, value } = this.props.product;
    return (
      <>
        <div className='selectedProductBox'>
          <div className='selectedProductInnerBox'>
            <div className='flexSelectedProductBox'>
              <div className='selectedProductName'>{label}</div>
              <button className='deleteButton'>X</button>
            </div>
            <div className='flexSelectedProductPriceBox'>
              <select
                id=''
                className='selectProductCount'
                onChange={this.props.passValue}>
                {count.map((countNumber, countIndex) => (
                  <option key={countIndex}>{countNumber}</option>
                ))}
              </select>
              <div className='selectedProductPrice'>
                {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SelectedProduct;
