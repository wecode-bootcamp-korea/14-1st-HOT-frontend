import React, { Component } from 'react';
import './Category.scss';
import ListTitle from './ListTitle/ListTitle';
import ListOther from './ListOther/ListOther';
import Banner from './Banner/Banner';
import ProductList from './ProductList/ProductList';
import { API } from '../../config';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categoryTitle: [],
      categoryOther: [],
      productList: [],
      subProductList: [],
      titleSwitch: false,
      catTitle: '',
      subTitle: '',
    };
  }

  componentDidMount() {
    this.getCategoryOtherMenu();
    this.getCategoryTitleMenu();
    this.getALLProductList();
  }

  getCategoryOtherMenu = () => {
    fetch(`${API}/store/categories`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          categoryOther: res.result,
        });
      });
  };

  getALLProductList = () => {
    fetch(`${API}/store/products?menu=1`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res.result,
        });
      });
  };

  getCategoryTitleMenu = () => {
    fetch(`${API}/store/categories?menu=1`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
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
      headers: {
        authorization: localStorage.getItem('token'),
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
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productList: res.result,
        });
        this.setState({
          catTitle: categoryElement,
        });
      });
  };

  getSubProductList = (subCategoriesElement) => {
    fetch(`${API}/store/products?sub=${subCategoriesElement.subcategory_id}`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          subProductList: res.result,
        });
        this.setState({
          subTitle: subCategoriesElement,
        });
      });
  };

  render() {
    const {
      categoryTitle,
      categoryOther,
      productList,
      subProductList,
      catTitle,
      subTitle,
    } = this.state;
    const { changeTitleMenu, getProductList, getSubProductList } = this;
    return (
      <>
        <section className='Category'>
          <aside className='asidContainer'>
            <div className='listBox'>
              {categoryTitle && (
                <ListTitle
                  giveTitle={categoryTitle}
                  takeClickEvent={getProductList}
                  takeSubClickEvent={getSubProductList}
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
              {<Banner giveCarTitle={catTitle} giveSubTitle={subTitle} />}
              {productList.length && (
                <ProductList
                  giveCatProduct={productList}
                  giveSubProduct={subProductList}
                />
              )}
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default Category;
