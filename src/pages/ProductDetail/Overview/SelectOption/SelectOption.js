import React, { Component } from 'react';
import './SelectOption.scss';
import SelectedProduct from './SelectedProduct/SelectedProduct';

class SelectOption extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      selectedProducts: [],
    };
  }

  componentDidMount = () => {
    this.setState({ productList: this.props.productList });
    this.setState({ selectedProducts: this.state.selectedProducts });
  };

  getSelectedProduct = (e) => {
    const { options, selectedIndex, value } = e.target;
    const { selectedProducts } = this.state;
    const selectedProduct = [...selectedProducts];
    if (
      selectedProduct.some(
        (ele) => ele.label === options[selectedIndex].innerHTML
      )
    ) {
      alert('이미 선택한 옵션입니다.');
    } else {
      selectedProduct.push({
        label: options[selectedIndex].innerHTML,
        value: value,
        count: 1,
      });
      this.setState({
        selectedProducts: selectedProduct,
      });
    }
  };

  getProductCount = (product, count) => {
    const selectedProducts = [...this.state.selectedProducts];
    const idx = selectedProducts.indexOf(product);
    selectedProducts[idx].count = parseInt(count);
    this.setState({ selectedProducts });
  };

  deleteTargetProduct = () => {};

  render() {
    const { color } = this.props.productList;
    const { selectedProducts } = this.state;
    const { getSelectedProduct, getProductCount, deleteTargetProduct } = this;
    console.log(this.props.productList, color);
    return (
      <>
        <div>
          <div className='selectBox'>
            <select className='selectColorBox' onChange={getSelectedProduct}>
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
              <img
                src='/images/option.png'
                className='optionIcon'
                alt='option'
              />
            </span>
          </div>
          {selectedProducts[0] &&
            selectedProducts.map((productInfo, productIndex) => (
              <SelectedProduct
                key={productIndex}
                product={productInfo}
                productValue={getProductCount}
                deleteTarget={deleteTargetProduct}
              />
            ))}
          <div className='purchaseContainer'>
            <form action='' className='purchaseEvenform'>
              <div className='calculationBox'>
                <div className='calculationText'>주문금액</div>
                <div className='totalPrice'>
                  {selectedProducts &&
                    selectedProducts
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
        </div>
      </>
    );
  }
}

export default SelectOption;
