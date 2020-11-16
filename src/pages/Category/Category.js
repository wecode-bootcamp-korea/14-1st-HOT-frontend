import React, { Component } from 'react';
import '../../styles/common.scss';
import '../../styles/reset.scss';

class Category extends Component {
  render() {
    return (
      <section className='categoryContainer'>
        <asid className='categorySideBarContainer'>
          <ul>
            <li className='categoryList'>가구</li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
            <li className='categoryList'></li>
          </ul>
        </asid>
        <div className='categoryBannerbar'></div>
        <div className='categoryFeedContainer'></div>
      </section>
    );
  }
}

export default Category;
