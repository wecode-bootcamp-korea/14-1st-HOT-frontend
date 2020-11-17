import React, { Component } from 'react';
import './CategoryListTitle.scss';

class CategoryListTitle extends Component {
  constructor() {
    super();
    this.state = {
      switch: [false, false, false, false, false, false, false, false],
    };
  }
  componentDidMount = () => {
    this.changeSubtitleColor();
  };

  hideCategoryList = (ele) => {
    const prevSwitch = [...this.state.switch];
    prevSwitch[ele.id] = !prevSwitch[ele.id];
    this.setState({ switch: prevSwitch });
    console.log(this.state.switch);
  };

  changeSubtitleColor = () => {};

  render() {
    const { title, subtitle } = this.props.title;
    return (
      <>
        <div className='categoryTitleName'>
          <span>{title}</span>
        </div>
        <div className='categorySubTitle'>
          {subtitle &&
            subtitle.map((ele, index) => (
              <>
                <div className='categorySubTitleMenubox flexSpaceBox'>
                  <button
                    className='categorySubTitleList'
                    onClick={() => this.hideCategoryList(ele)}>
                    {ele.subTitle}
                  </button>
                  <div className='categorySubTitleButtonBox'>
                    <button
                      className='showButtonBox'
                      onClick={() => this.hideCategoryList(ele)}>
                      <img
                        src={
                          this.state.switch[ele.id]
                            ? '/images/hiddenIcon.png'
                            : '/images/showIcon.png'
                        }
                        className='showButton'
                        alt='showButtonIcon'
                      />
                    </button>
                  </div>
                </div>
                {ele.susubtitle.map((ele2) =>
                  this.state.switch[index] ? (
                    <div className='categorySusubTitleList'>
                      {ele2.susubTitle}
                    </div>
                  ) : null
                )}
              </>
            ))}
        </div>
      </>
    );
  }
}

export default CategoryListTitle;
