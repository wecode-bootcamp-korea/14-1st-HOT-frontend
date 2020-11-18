import React, { Component } from 'react';
import './CategoryListTitle.scss';

class CategoryListTitle extends Component {
  constructor() {
    super();
    this.state = {
      switch: [false, false, false, false, false, false, false, false],
      title: '',
      subTitle: '',
    };
  }

  hideCategoryList = (e, ele) => {
    const prevSwitch = [...this.state.switch];
    prevSwitch[ele.id] = !prevSwitch[ele.id];
    this.setState({ switch: prevSwitch });
    this.setState({ title: e.target.innerText });
    console.log(this.state.title, this.state.subTitle);
  };

  selectTarget = (e) => {
    this.setState({ subTitle: e.target.innerText });
    e.target.className = 'categorySusubTitleList targetColor';
  };

  render() {
    const { title, subtitle } = this.props.title;
    return (
      <div className='categoryListTitle'>
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
                    onClick={(e) => this.hideCategoryList(e, ele)}>
                    {ele.subTitle}
                  </button>
                  <div className='categorySubTitleButtonBox'>
                    <button
                      className='showButtonBox'
                      onClick={(e) => this.hideCategoryList(e, ele)}>
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
                {ele.susubtitle.map(
                  (ele2) =>
                    this.state.switch[index] && (
                      <div
                        className={'categorySusubTitleList'}
                        onClick={this.selectTarget}>
                        {ele2.susubTitle}
                      </div>
                    )
                )}
              </>
            ))}
        </div>
      </div>
    );
  }
}

export default CategoryListTitle;
