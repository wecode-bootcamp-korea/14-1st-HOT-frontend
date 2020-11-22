import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Overview.scss';
import SelectedProduct from './SelectedProduct/SelectedProduct';

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      sale: 10,
      selectedProducts: [],
    };
  }

  componentDidMount() {
    this.getProductList();
  }

  getProductList = () => {
    fetch('/Data/productDetailView.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          productList: result.products[0],
        });
      });
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

  render() {
    const {
      seller,
      title,
      image,
      price,
      review,
      bookMark,
      share,
      color,
    } = this.state.productList;
    const { selectedProducts } = this.state;
    const { getSelectedProduct } = this;
    const salePrice = Math.floor(price - (price * this.state.sale) / 100);
    console.log(selectedProducts);
    return (
      <div className='overview'>
        <div className='overviewBox'>
          <div className='category'>
            {'가구'} {'>'} {'소파/거실가구'} {'>'} {'소파'} {'>'} {'일반소파'}
          </div>
          <div className='overviewCover'>
            <div className='coverImageBox'>
              <div className='coverImageListBox'>
                {image &&
                  image.map((coverImage, coverImageIndex) => (
                    <button key={coverImageIndex} className='coverImageBox'>
                      <img
                        src={coverImage}
                        alt='coverImage'
                        className='miniCoverImage'
                      />
                    </button>
                  ))}
              </div>
              <div className='coverImageWrap'>
                <img
                  src={image && image[0]}
                  alt='coverImage'
                  className='coverImage'
                />
              </div>
            </div>
            <div className='overViewList'>
              <div className='seller'>{seller}</div>
              <div className='title'>{title}</div>
              <div className='spaceReviewBox'>
                <div className='reviewBox'>
                  <div className='reviewScore'>
                    <div className='scoreBox'>
                      <img
                        src='/images/fivestars.png'
                        className='scoreImage'
                        alt='stars'
                      />
                    </div>
                    <div className='reviewCount'>
                      {review && review.length}
                      {'개 리뷰'}
                    </div>
                  </div>
                  <div className='scrapBox'>
                    <div className='bookMarkBox'>
                      <img
                        src='/images/bookmark.png'
                        className='bookmarkImage'
                        alt='bookmarkImage'
                      />
                      <div className='bookmarkCount'>
                        {bookMark &&
                          bookMark
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </div>
                    </div>
                    <div className='shareBox'>
                      <img
                        src='/images/share.png'
                        className='shareImage'
                        alt='shareImage'
                      />
                      <div className='shareCount'>
                        {share &&
                          share
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='priceBox'>
                  <div className='priceBar'>
                    <div className='sale'>
                      <div className='salePercent'>{this.state.sale}</div>
                      <div className='percent'>{'%'}</div>
                    </div>
                    <div className='price'>
                      <div className='prevPrice'>
                        {Math.floor(price && price)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </div>
                      <div className='currentPriceBox'>
                        <div className='currentPrice'>
                          {salePrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </div>
                        <div className='won'>{'원'}</div>
                      </div>
                    </div>
                    <div className='lowestPrice'>
                      <img
                        src='/images/lowprice.png'
                        className='lowestPriceImage'
                        alt='lowprice'
                      />
                    </div>
                  </div>
                  <div className='couponPrice'>
                    <div className='earlybirdSalePrice'>
                      {Math.floor(price - price / this.state.sale - 20000)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                    <div className='won'>{'원'}</div>
                    <div className='earlybirdSalePriceView'>
                      {'첫구매할인가 '}
                      {'>'}
                    </div>
                  </div>
                  <div className='reserveBox'>
                    <div className='reserveText'>
                      <span class='reservePoint'>
                        {Math.floor((price - price / this.state.sale) / 100)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>{' '}
                      {'적립해드립니다.'}
                    </div>
                    <div className='reserveAddPoint'>
                      <img src='/images/gold.svg' className='gold' alt='gold' />
                      {'100만원 이상 구매시 20,000P 추가 적립'}
                    </div>
                    <div className='interestFreePoint'>
                      {'월'}{' '}
                      {Math.floor((price - price / this.state.sale) / 7)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                      {'(7개월)'} {'무이자할부 >'}
                    </div>
                  </div>
                  <div className='deliveryInfoBox'>
                    <div className='deliveryInfo'>
                      <div className='deliveryMethod'>업체직접배송</div>
                      <div className='line'> | </div>
                      <div className='deliverySchedul'>15일 이내 배송</div>
                    </div>
                    <div className='deliveryStickyBox'>
                      <img
                        src='/images/freedelivery.png'
                        className='deliverySticky'
                        alt='freeDelivery'
                      />
                    </div>
                    <ul className='precautions'>
                      <li className='precautionsList'>
                        ∙ 조건에 따라 추가 비용 발생 가능 (상품 상세 정보 참고)
                      </li>
                      <li className='precautionsList'>
                        ∙ 제주도/도서산간 지역 배송 불가{' '}
                      </li>
                    </ul>
                  </div>
                  <div className='brandHome'>
                    <div className='brandIconBox'>
                      <img
                        src='/images/brandIcon.png'
                        className='brandHomeIcon'
                        alt='branIcon'
                      />
                    </div>
                    <Link to='/' className='linkReset brandName'>
                      {seller + ' 브랜드홈'}
                    </Link>
                  </div>
                  <div className='selectBox'>
                    <select
                      className='selectColorBox'
                      onChange={getSelectedProduct}>
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
                        productValue={this.getProductCount}
                      />
                    ))}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
