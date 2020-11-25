import React, { Component } from 'react';

class ProductOptions extends Component {
  render() {
    return (
      <>
        <div className='productOption'>
          <div className='flexOptionBox'>
            <div className='sizeOption'>오크화이트</div>
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
