import React, { Component } from 'react';
import './Cart.scss';
import Product from './Product/Product';

class Cart extends Component {
  render() {
    return (
      <div className='Cart'>
        <div className='selectAllContainer'>
          <div className='selectedProductsList'>
            <div className='selectAllBox'>
              <div className='checkBoxContainer flexBox'>
                <input
                  type='checkbox'
                  className='checkbox'
                  name='selectAll'
                  id='selectAll'
                />
                <label for='selectAll'>모두선택</label>
              </div>
              <div className='selectCheck'>선택삭제</div>
            </div>
            <div className='productsContainer'>
              <Product />
            </div>
          </div>
          <div className='totalCountBox'>
            <div className='calculator'>
              <div className='totalProductPrice flexSpaceBox'>
                <div className='totalProductPriceText flexBox'>총 상품금액</div>
                <div className='totalProductPriceCount flexBox'>
                  5,045,050원
                </div>
              </div>
              <div className='totalDilivery flexSpaceBox'>
                <div className='totalDiliveryText flexBox'>총 배송비</div>
                <div className='totalDiliveryCount flexBox'>+ 90,000원</div>
              </div>
              <div className='totalSale flexSpaceBox'>
                <div className='totalSaleText flexBox'>총 할인금액</div>
                <div className='totalSaleCount flexBox'>- 1,812,950원</div>
              </div>
              <div className='totalPrice flexSpaceBox'>
                <div className='totalPriceText flexBox'>결제금액</div>
                <div className='totalPriceCount flexBox'>3,322,100원</div>
              </div>
            </div>
            <button className='buyingButton'>{'4' + ' 개 구매하기'}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
