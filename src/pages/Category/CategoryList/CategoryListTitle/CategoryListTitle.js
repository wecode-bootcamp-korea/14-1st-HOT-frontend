import React, { Component } from 'react';
import './CategoryListTitle.scss';

class CategoryListTitle extends Component {
  constructor() {
    super();
    this.state = {
      openCategorySwitch: false,
      selectedCategory: '',
      selectedSubcategory: '',
    };
  }

  selectedCategoty = (e, subtitleElement) => {
    console.log(e.target);
    this.setState({ selectedCategory: subtitleElement.subTitle });
  };

  selectedSubcategory = (e, susubTitleElement) => {
    this.setState({ selectedSubcategory: susubTitleElement.susubTitle });
  };

  render() {
    const { title, subtitle } = this.props.title;
    const {
      selectedCategory,
      selectedSubcategory,
      openCategorySwitch,
    } = this.state;

    return (
      <div className='categoryListTitle'>
        <div className='categoryTitleName'>
          <span>{title}</span>
        </div>
        <div className='categorySubTitle'>
          {subtitle &&
            subtitle.map((subtitleElement) => (
              <div className='categorySubTitleMenubox '>
                <div className='categorySubTitleMenuAndButton flexSpaceBox'>
                  <button
                    onClick={(e) => this.selectedCategoty(e, subtitleElement)}
                    className={
                      selectedCategory === subtitleElement.subTitle
                        ? 'categorySubTitleList targetColor'
                        : 'categorySubTitleList'
                    }>
                    {subtitleElement.subTitle}
                  </button>
                  <button className='categorySubTitleButtonBox'>
                    <div
                      className='showButtonBox'
                      onClick={(e) =>
                        this.selectedCategoty(e, subtitleElement)
                      }>
                      <img
                        src={
                          openCategorySwitch
                            ? '/images/hiddenIcon.png'
                            : '/images/showIcon.png'
                        }
                        className='showButton'
                        alt='showButtonIcon'
                      />
                    </div>
                  </button>
                </div>
                <div className='suSubTitleListBox'>
                  {subtitleElement.susubtitle.map((susubTitleElement) => (
                    <button
                      onClick={(e) =>
                        this.selectedSubcategory(e, susubTitleElement)
                      }
                      className={
                        selectedSubcategory === susubTitleElement.susubTitle
                          ? 'categorySusubTitleList targetColor'
                          : 'categorySusubTitleList'
                      }>
                      {susubTitleElement.susubTitle}
                    </button>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default CategoryListTitle;
