import React, { Component } from 'react';
import ListTitle from './ListTitle/ListTitle';
import ListOther from './ListOther/ListOther';
import Banner from './Banner/Banner';
import ProductList from './ProductList/ProductList';
import NavigationBar from '../../component/NavigationBar/NavigationBar';

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
        <NavigationBar />
        <section className='container'>
          <aside className='asidContainer'>
            <div className='listBox'>
              <ListTitle title={categoryTitle} />
              <ListOther other={categoryOther} />
            </div>
          </aside>
          <article className='feedContainer'>
            <div className='bannerbar'>
              <Banner />
              <ProductList />
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default Category;
