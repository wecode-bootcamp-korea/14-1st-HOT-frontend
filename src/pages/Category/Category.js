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
    fetch('http://10.58.1.135:8000/store/categories', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result[0]);
        this.setState({
          categoryOther: res.result,
        });
        this.setState({
          categoryTitle: res.result[0],
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
              <ListOther
                other={categoryOther.filter(
                  (ele) => ele.menu_name !== this.state.categoryTitle.menu_name
                )}
              />
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
