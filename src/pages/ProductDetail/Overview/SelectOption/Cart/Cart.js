import React, { Component } from 'react';
import './Cart.scss';
import Product from './Product/Product';
import calcuration from '../../../Function/calcuration';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      selectProduct: [],
    };
  }

  componentDidMount() {
    this.getProductList();
  }

  getProductList = () => {
    fetch('/Data/cart.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          selectProduct: result.cart,
        });
      });
  };

  handleDelete = (e) => {
    const selectProduct = [...this.state.selectProduct];
    selectProduct.filter();
    this.setState({ selectProduct });
  };

  render() {
    const { selectProduct } = this.state;
    const { handleDelete } = this;
    return (
      <>
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
                <div className='selectCheck' onClick={handleDelete}>
                  선택삭제
                </div>
              </div>
              {selectProduct &&
                selectProduct.map((productElement) => (
                  <div className='productsContainer'>
                    <Product product={productElement} />
                  </div>
                ))}
            </div>
            <div className='totalCountBox'>
              <div className='calculator'>
                <div className='totalProductPrice flexSpaceBox'>
                  <div className='totalProductPriceText flexBox'>
                    총 상품금액
                  </div>
                  <div className='totalProductPriceCount flexBox'>
                    {calcuration(selectProduct, 1, 1)}
                  </div>
                </div>
                <div className='totalDilivery flexSpaceBox'>
                  <div className='totalDiliveryText flexBox'>총 배송비</div>
                  <div className='totalDiliveryCount flexBox'>0원</div>
                </div>
                <div className='totalSale flexSpaceBox'>
                  <div className='totalSaleText flexBox'>총 할인금액</div>
                  <div className='totalSaleCount flexBox'>
                    {calcuration(selectProduct, 10, 1)}
                  </div>
                </div>
                <div className='totalPrice flexSpaceBox'>
                  <div className='totalPriceText flexBox'>결제금액</div>
                  <div className='totalPriceCount flexBox'>
                    {calcuration(selectProduct, 10, 9)}
                  </div>
                </div>
              </div>
              <button className='buyingButton'>
                {selectProduct.length + ' 개 구매하기'}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
