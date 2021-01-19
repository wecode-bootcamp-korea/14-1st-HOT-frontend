import React, { Component } from 'react';
import './ListTitle.scss';

class ListTitle extends Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: '',
      selectedSubcategory: '',
      openCategorySwitch: false,
    };
  }

  selectedCategory = (categoryElement) => {
    this.setState({ selectedCategory: categoryElement.category_name });
    this.props.takeClickEvent(categoryElement);
  };

  selectedSubcategory = (subCategoriesElement) => {
    this.setState({
      selectedSubcategory: subCategoriesElement.subcategory_name,
    });
    this.props.takeSubClickEvent(subCategoriesElement);
  };

  render() {
    const { menu_name, categories } = this.props.giveTitle;
    const {
      selectedCategory,
      selectedSubcategory,
      openCategorySwitch,
    } = this.state;
    return (
      <div className='listTitle'>
        <div className='litleName'>
          <span>{menu_name}</span>
        </div>
        <div className='subTitle'>
          {categories &&
            categories.map((categoryElement, categoriesIndex) => (
              <div key={categoriesIndex} className={'subTitleMenubox'}>
                <div className='subTitleMenuAndButton'>
                  <button
                    onClick={() => this.selectedCategory(categoryElement)}
                    className={
                      selectedCategory === categoryElement.category_name
                        ? 'subTitleList changeColorEvent '
                        : 'subTitleList'
                    }>
                    {categoryElement.category_name}
                  </button>
                  <button className='subTitleButtonBox'>
                    <div
                      className='showButtonBox'
                      onClick={() => this.selectedCategory(categoryElement)}>
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
                    selectedCategory === categoryElement.category_name
                      ? 'suOfSubTitleListBox moveDropEvent'
                      : 'suOfSubTitleListBox moveCloseEvent'
                  }>
                  {categoryElement.subcategories.map(
                    (subCategoriesElement, subCategoriesIndex) => (
                      <button
                        key={subCategoriesIndex}
                        onClick={() =>
                          this.selectedSubcategory(subCategoriesElement)
                        }
                        className={
                          selectedSubcategory ===
                          subCategoriesElement.subcategory_name
                            ? 'suOfSubTitleList changeColorEvent'
                            : 'suOfSubTitleList'
                        }>
                        {subCategoriesElement.subcategory_name}
                      </button>
                    )
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ListTitle;
