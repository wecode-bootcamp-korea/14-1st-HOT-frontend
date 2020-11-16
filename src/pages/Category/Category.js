import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/common.scss';
import '../../styles/reset.scss';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      sideBarList: [],
    };
  }
  render() {
    return (
      <section className='categoryContainer'>
        <div className='categoryMainContainer'>
          <asid className='categorySideBarContainer'>
            <ul>
              <li className='categoryList'>
                <Link>가구</Link>
                <div className='innerCategoryList'>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>

              <li className='categoryList'>패브릭</li>
              <li className='categoryList'>홈데코/조명</li>
              <li className='categoryList'>가전</li>
              <li className='categoryList'>수납/정리</li>
              <li className='categoryList'>생활</li>
              <li className='categoryList'>주방</li>
              <li className='categoryList'>DIY/공구</li>
              <li className='categoryList'>인테리어시공</li>
              <li className='categoryList'>반려동물</li>
              <li className='categoryList'>캠핑용품</li>
            </ul>
          </asid>
          <div className='categoryFeedContainer'>
            <div className='categoryBannerbar'>11</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Category;
