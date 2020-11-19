import React, { Component } from 'react';
import CategoryListTitle from './CategoryListTitle/CategoryListTitle';
import CategoryListOther from './CategoryListOther/CategoryListOther';
import CategoryBanner from './CategoryBanner/CategoryBanner';
import ProductList from './ProductList/ProductList';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: [],
      categoryOther: [],
      titleSwitch: false,
    };
  }

  componentDidMount() {
    this.getCategoryMenu();
  }

  getCategoryMenu = () => {
    fetch('/Data/category.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryOther: res.category,
        });
        this.setState({
          categoryTitle: res.category[0],
        });
      });
  };

  getOnclickMenu = (e) => {
    e.preventDefault();
  };

  render() {
    const { categoryTitle, categoryOther } = this.state;
    return (
      <>
        <img src='/images/sample.png' alt='sample' width='100%'></img>
        <section className='categoryContainer'>
          <aside className='categoryAsidContainer'>
            <div className='categoryListBox'>
              <CategoryListTitle title={categoryTitle} />
              <CategoryListOther other={categoryOther} />
            </div>
          </aside>
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
