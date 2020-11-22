import React, { Component } from 'react';
import SelectedProduct from './SelectedProduct/SelectedProduct';

class SelectOption extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount = () => {
    this.setState({ productList: this.props.giveProductInfo });
  };

  getProductCount = (targetProduct, countString) => {
    this.props.takeSelectedProductsValue(targetProduct, countString);
  };

  render() {
    const { color } = this.props.giveProductInfo;
    const { giveSelectedProducts, takeSelectedProducts } = this.props;
    const { getProductCount } = this;
    return (
      <>
        <div className='selectBox'>
          <select className='selectColorBox' onChange={takeSelectedProducts}>
            <option
              value='disabled'
              defaultSelected='true'
              hidden='true'
              selected='true'>
              옵션: 색상
            </option>
            {color &&
              color.map((colorElement) => (
                <option
                  key={colorElement.label}
                  label={colorElement.label}
                  value={colorElement.price}>
                  {'선택: '}
                  {colorElement.label}
                </option>
              ))}
          </select>
          <span class='optionIconBox'>
            <img src='/images/option.png' className='optionIcon' alt='option' />
          </span>
        </div>
        <SelectedProduct
          giveSelectedProducts={giveSelectedProducts}
          takeCountValue={getProductCount}
        />
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
