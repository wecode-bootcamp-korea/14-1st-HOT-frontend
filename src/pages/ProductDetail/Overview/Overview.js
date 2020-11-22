import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Overview.scss';
import SelectOption from './SelectOption/SelectOption';

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      coverImageSrc: '',
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
          coverImageSrc: result.products[0].image[0],
        });
      });
  };

  changeCoverImage = (e) => {
    this.setState({ coverImageSrc: e.target.src });
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
    } = this.state.productList;
    const { coverImageSrc } = this.state;
    const { changeCoverImage } = this;
    const salePrice = Math.floor(price - (price * this.state.sale) / 100);
    return (
      <div className='overview'>
        <div className='overviewBox'>
          <div className='category'>
            {'가구'} {'>'} {'소파/거실가구'} {'>'} {'소파'} {'>'} {'일반소파'}
          </div>
          <div className='overviewCover'>
            <div className='coverImagesBox'>
              <div className='coverImageListBox'>
                {image &&
                  image.map((coverImageList, coverImageIndex) => (
                    <button key={coverImageIndex} className='coverImageBox'>
                      <img
                        src={coverImageList}
                        alt='coverImage'
                        className='miniCoverImage'
                        onMouseOver={changeCoverImage}
                      />
                    </button>
                  ))}
              </div>
              <div className='coverImageWrap'>
                <img
                  src={coverImageSrc}
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
                  <SelectOption
                    productList={this.state.productList}
                    selectedProducts={this.state.selectedProducts}
                  />
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
