import React, { Component } from 'react';
import './Category.scss';
import ListTitle from './ListTitle/ListTitle';
import ListOther from './ListOther/ListOther';
import Banner from './Banner/Banner';
import ProductList from './ProductList/ProductList';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import { API } from '../../config';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: [],
      categoryOther: [],
      titleSwitch: false,
      productList: [],
    };
  }

  componentDidMount() {
    this.getCategoryOtherMenu();
    this.getCategoryTitleMenu();
  }

  getCategoryOtherMenu = () => {
    fetch(`${API}/store/categories`, {
      method: 'GET',
      header: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.gskNoENb-XxLJnewpID43ddKxVgXH3LqXBZ4mQWpUBk',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryOther: res.result,
        });
      });
  };

  getCategoryTitleMenu = () => {
    fetch(`${API}/store/categories?menu=1`, {
      method: 'GET',
      header: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.gskNoENb-XxLJnewpID43ddKxVgXH3LqXBZ4mQWpUBk',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryTitle: res.result,
        });
      });
  };

  changeTitleMenu = (otherElement) => {
    fetch(`${API}/store/categories?menu=${otherElement.menu_id}`, {
      method: 'GET',
      header: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.gskNoENb-XxLJnewpID43ddKxVgXH3LqXBZ4mQWpUBk',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryTitle: res.result,
        });
      });
  };

  getProductList = (categoryElement) => {
    fetch(`${API}/store/products?cat=${categoryElement.category_id}`, {
      method: 'GET',
      header: {
        authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.gskNoENb-XxLJnewpID43ddKxVgXH3LqXBZ4mQWpUBk',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res.result,
        });
      });
  };

  render() {
    const { categoryTitle, categoryOther, productList } = this.state;
    const { changeTitleMenu, getProductList } = this;
    console.log(this.state.productList);
    return (
      <>
        <NavigationBar />
        <section className='Category'>
          <aside className='asidContainer'>
            <div className='listBox'>
              {categoryTitle && (
                <ListTitle
                  giveTitle={categoryTitle}
                  takeClickEvent={getProductList}
                />
              )}
              {categoryOther.length && (
                <ListOther
                  giveOther={categoryOther}
                  takeTitleMenu={changeTitleMenu}
                />
              )}
            </div>
          </aside>
          <article className='feedContainer'>
            <div className='bannerbar'>
              <Banner />
              <ProductList catProduct={productList} />
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default Category;
