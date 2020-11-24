import React, { Component } from 'react';
import SelectedProduct from './SelectedProduct/SelectedProduct';

class SelectOption extends Component {
  getProductCount = (targetProduct, countString) => {
    this.props.takeSelectedProductsValue(targetProduct, countString);
  };

  handleDelete = (productIndex) => {
    this.props.takeSelectedProductsDelIndex(productIndex);
  };

  aaa = () => {};

  render() {
    const {
      giveSelectedProducts,
      giveProductInfo,
      giveBookmarkColor,
      takeSelectedColor,
      takeSelectedOption,
      takeBookmarkEvent,
      takeModalEvent,
    } = this.props;
    const { getProductCount, handleDelete } = this;
    return (
      <>
        <div className='flexSelectBox'>
          <div className='selectBox'>
            <select className='selectColorBox' onChange={takeSelectedColor}>
              <option hidden selected>
                옵션: 색상
              </option>
              {giveProductInfo.color &&
                giveProductInfo.color.map(
                  (firstColorElement, firstOptionindex) => (
                    <option key={firstOptionindex} label={firstColorElement}>
                      {firstColorElement}
                    </option>
                  )
                )}
            </select>
            <select className='selectOptionBox' onChange={takeSelectedOption}>
              <option hidden selected>
                옵션: 사이즈
              </option>
              {giveProductInfo.details &&
                giveProductInfo.details.map(
                  (firstOptionElement, firstOptionindex) => (
                    <option
                      key={firstOptionindex}
                      label={firstOptionElement.size}
                      value={firstOptionElement.price}>
                      {firstOptionElement.size}
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
            <span class='optionIconBox2'>
              <img
                src='/images/option.png'
                className='optionIcon2'
                alt='option'
              />
            </span>
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
              <button className='bookmarkBox' onClick={takeBookmarkEvent}>
                <img
                  src={
                    giveBookmarkColor
                      ? '/images/bookmark.png'
                      : '/images/unBookmark.png'
                  }
                  className='bookmark'
                  alt='bookMarkIcon'
                />
              </button>
              <button className='cart' onClick={takeModalEvent}>
                장바구니
              </button>
              <button className='purchase'>바로구매</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SelectOption;
