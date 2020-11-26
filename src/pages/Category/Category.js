import React, { Component } from 'react';
import ListTitle from './ListTitle/ListTitle';
import ListOther from './ListOther/ListOther';
import Banner from './Banner/Banner';
import ProductList from './ProductList/ProductList';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import './Category.scss';

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
    this.getCategoryOtherMenu();
    this.getCategoryTitleMenu();
  }

  getCategoryOtherMenu = () => {
    fetch('http://10.58.5.203:8000/store/categories', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryOther: res.result,
        });
      });
  };

  getCategoryTitleMenu = () => {
    fetch('http://10.58.5.203:8000/store/categories?menu=1', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryTitle: res.result,
        });
      });
  };

  render() {
    const { categoryTitle, categoryOther } = this.state;
    console.log(categoryTitle, categoryOther);
    return (
      <>
        <NavigationBar />
        <section className='Category'>
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
