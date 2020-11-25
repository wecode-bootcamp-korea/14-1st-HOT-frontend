import React, { Component } from 'react';
import './ProductOptions.scss';

class ProductOptions extends Component {
  render() {
    const { product_name } = this.props.option;
    return (
      <>
        <div className='productOption'>
          <div className='flexOptionBox'>
            <div className='sizeOption'>{product_name}</div>
            <div className='deleteButton'>X</div>
          </div>
          <div className='countOption'>
            <select className='countSection'>
              <option value='1' className='asd' hidden selected>
                {'1'}
              </option>
            </select>
            <div className='proce'>190,000원</div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductOptions;
