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

  selectedCategoty = (subtitleElement) => {
    this.setState({ selectedCategory: subtitleElement.subTitle });
  };

  selectedSubcategory = (susubTitleElement) => {
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
              <div className={'categorySubTitleMenubox '}>
                <div className='categorySubTitleMenuAndButton flexSpaceBox'>
                  <button
                    onClick={() => this.selectedCategoty(subtitleElement)}
                    className={
                      selectedCategory === subtitleElement.subTitle
                        ? 'categorySubTitleList changeColorEvent '
                        : 'categorySubTitleList'
                    }>
                    {subtitleElement.subTitle}
                  </button>
                  <button className='categorySubTitleButtonBox'>
                    <div
                      className='showButtonBox'
                      onClick={() => this.selectedCategoty(subtitleElement)}>
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
                <div
                  className={
                    selectedCategory === subtitleElement.subTitle
                      ? 'suSubTitleListBox moveDropEvent'
                      : 'suSubTitleListBox moveCloseEvent'
                  }>
                  {subtitleElement.susubtitle.map((susubTitleElement) => (
                    <button
                      onClick={() =>
                        this.selectedSubcategory(susubTitleElement)
                      }
                      className={
                        selectedSubcategory === susubTitleElement.susubTitle
                          ? 'categorySusubTitleList changeColorEvent'
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
