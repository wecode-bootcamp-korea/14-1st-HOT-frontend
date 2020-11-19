import React, { Component } from 'react';
import './ListTitle.scss';

class ListTitle extends Component {
  constructor() {
    super();
    this.state = {
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
      <div className='ListTitle'>
        <div className='LitleName'>
          <span>{title}</span>
        </div>
        <div className='subTitle'>
          {subtitle &&
            subtitle.map((subtitleElement, subtitleIndex) => (
              <div key={subtitleIndex} className={'subTitleMenubox'}>
                <div className='subTitleMenuAndButton'>
                  <button
                    onClick={() => this.selectedCategoty(subtitleElement)}
                    className={
                      selectedCategory === subtitleElement.subTitle
                        ? 'subTitleList changeColorEvent '
                        : 'subTitleList'
                    }>
                    {subtitleElement.subTitle}
                  </button>
                  <button className='subTitleButtonBox'>
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
                      ? 'suOfSubTitleListBox moveDropEvent'
                      : 'suOfSubTitleListBox moveCloseEvent'
                  }>
                  {subtitleElement.susubtitle.map(
                    (susubTitleElement, susubTitleIndex) => (
                      <button
                        key={susubTitleIndex}
                        onClick={() =>
                          this.selectedSubcategory(susubTitleElement)
                        }
                        className={
                          selectedSubcategory === susubTitleElement.susubTitle
                            ? 'suOfSubTitleList changeColorEvent'
                            : 'suOfSubTitleList'
                        }>
                        {susubTitleElement.susubTitle}
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
