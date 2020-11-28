import React, { Component } from 'react';
import './ProductOptions.scss';

class ProductOptions extends Component {
  render() {
    const { color, size, price, count } = this.props.option;
    return (
      <>
        <div className='productOption'>
          <div className='flexOptionBox'>
            <div className='sizeOption'>{color + ' ' + size}</div>
            <div className='deleteButton'>X</div>
          </div>
          <div className='countOption'>
            <select className='countSection'>
              <option value='1' className='asd' hidden selected>
                {count}
              </option>
            </select>
            <div className='price'>
              {parseInt(price * count)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductOptions;
