import React, { Component } from 'react';
import CategoryList from './CategoryList/CategoryList';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import ProductList from './ProductList/ProductList';
import './Category.scss';

class Category extends Component {
  render() {
    return (
      <>
        <img src='/images/sample.png' alt='sample' width='100%'></img>
        <section className='categoryContainer'>
          <asid className='categoryAsidContainer'>
            <CategoryList />
          </asid>
          <article className='categoryFeedContainer'>
            <div className='categoryBannerbar'>
              <CategoryBanner />
              <ProductList />
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default Category;
