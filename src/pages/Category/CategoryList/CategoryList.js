import React, { Component } from 'react';
import CategoryListTitle from './CategoryListTitle/CategoryListTitle';
import CategoryListOther from './CategoryListOther/CategoryListOther';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './CategoryList.scss';

class CategoryList extends Component {
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
        <div className='categoryListBox'>
          <CategoryListTitle title={categoryTitle} />
          <CategoryListOther other={categoryOther} />
        </div>
      </>
    );
  }
}

export default CategoryList;
