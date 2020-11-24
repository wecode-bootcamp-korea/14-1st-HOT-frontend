import React, { Component } from 'react';
import SelectedProduct from './SelectedProduct/SelectedProduct';

class SelectOption extends Component {
  getProductCount = (targetProduct, countString) => {
    this.props.takeSelectedProductsValue(targetProduct, countString);
  };
  handleDelete = (productIndex) => {
    this.props.takeSelectedProductsDelIndex(productIndex);
  };
  render() {
    const {
      giveSelectedProducts,
      giveProductInfo,
      takeSelectedProducts,
    } = this.props;
    const { getProductCount, handleDelete } = this;
    return (
      <>
        <div>
          <div className='flexSelectBox'>
            <div className='selectBox'>
              <select
                className='selectColorBox'
                onChange={takeSelectedProducts}>
                <option
                  value='disabled'
                  defaultSelected='true'
                  hidden='true'
                  selected='true'>
                  옵션: 색상
                </option>
                {giveProductInfo.details &&
                  giveProductInfo.details.map(
                    (firstOptionElement, firstOptionindex) => (
                      <option
                        key={firstOptionindex}
                        label={
                          firstOptionElement.color +
                          ' ' +
                          firstOptionElement.size
                        }
                        value={firstOptionElement.price}>
                        {'선택: '}
                        {firstOptionElement.color +
                          ' ' +
                          firstOptionElement.size}
                      </option>
                    )
                  )}
              </select>
              <span class='optionIconBox'>
                <img
                  src='/images/option.png'
                  className='optionIcon'
                  alt='option'
                />
              </span>
            </div>
            <SelectedProduct
              giveSelectedProducts={giveSelectedProducts}
              takeCountValue={getProductCount}
              takeDeleteFuction={handleDelete}
            />
          </div>
        </div>
        <div className='purchaseContainer'>
          <form action='' className='purchaseEvenform'>
            <div className='calculationBox'>
              <div className='calculationText'>주문금액</div>
              <div className='totalPrice'>
                {giveSelectedProducts &&
                  giveSelectedProducts
                    .reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        parseInt(currentValue.value * currentValue.count),
                      0
                    )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                {'원'}
              </div>
            </div>
            <div className='purchaseButtonBox'>
              <button className='bookmarkBox'>
                <img
                  src='/images/bookmark.png'
                  className='bookmark'
                  alt='bookMarkIcon'
                />
              </button>
              <button className='cart'>장바구니</button>
              <button className='purchase'>바로구매</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SelectOption;
