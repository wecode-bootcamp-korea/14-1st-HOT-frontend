import React, { Component } from 'react';
import './SelectedProduct.scss';

class SelectedProduct extends Component {
  getSelectedProduct = (e, targetProductInfo) => {
    this.props.takeCountValue(targetProductInfo, e.target.value);
  };

  handleDeleteButton = (productIndex) => {
    this.props.takeDeleteFuction(productIndex);
  };

  render() {
    const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const { giveSelectedProducts } = this.props;
    const { getSelectedProduct, handleDeleteButton } = this;
    return (
      <>
        {giveSelectedProducts &&
          giveSelectedProducts.map((targetProductInfo, productIndex) => (
            <div key={productIndex} className='selectedProductBox'>
              <div className='selectedProductInnerBox'>
                <div className='flexSelectedProductBox'>
                  <div className='selectedProductName'>
                    {targetProductInfo.label}
                  </div>
                  <button
                    className='deleteButton'
                    onClick={() => handleDeleteButton(productIndex)}>
                    X
                  </button>
                </div>
                <div className='flexSelectedProductPriceBox'>
                  <select
                    value={targetProductInfo.count}
                    className='selectProductCount'
                    onChange={(e) => getSelectedProduct(e, targetProductInfo)}>
                    {counts.map((countNumber, countIndex) => (
                      <option key={countIndex} id={countIndex}>
                        {countNumber}
                      </option>
                    ))}
                  </select>
                  <div className='selectedProductPrice'>
                    {(targetProductInfo.value * targetProductInfo.count)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }
}

export default SelectedProduct;
