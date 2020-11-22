import React, { Component } from 'react';
import './SelectedProduct.scss';

class SelectedProduct extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  getSelectedProduct = (e) => {
    this.props.productValue(this.props.product, e.target.value);
    this.setState({ count: e.target.value });
  };

  render() {
    const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const { label, value } = this.props.product;
    const { count } = this.state;
    const { getSelectedProduct } = this;
    return (
      <>
        <div className='selectedProductBox'>
          <div className='selectedProductInnerBox'>
            <div className='flexSelectedProductBox'>
              <div className='selectedProductName'>{label}</div>
              <button
                className='deleteButton'
                onClick={this.props.deleteTarget}>
                X
              </button>
            </div>
            <div className='flexSelectedProductPriceBox'>
              <select
                className='selectProductCount'
                onChange={getSelectedProduct}>
                {counts.map((countNumber, countIndex) => (
                  <option key={countIndex} id={countIndex}>
                    {countNumber}
                  </option>
                ))}
              </select>
              <div className='selectedProductPrice'>
                {(value * count)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SelectedProduct;
