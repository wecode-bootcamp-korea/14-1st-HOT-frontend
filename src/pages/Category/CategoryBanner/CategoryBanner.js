import React, { Component } from 'react';

class CategoryBanner extends Component {
  render() {
    return (
      <>
        <div className='categoryBannerTitle'>
          <span className='categoryBannerTitletext'>가구</span>
          <span> {'>'} </span>
          <span className='categoryBannerTitletext'>소파/거실</span>
        </div>
        <div className='categoryBannerImageBox'>
          <img
            src='/images/bannerSample.png'
            className='categoryBannerImage'
            alt='rollingBanner'
          />
          <button>
            <img
              src='/images/leftarrow2.png'
              className='leftArrowIcon'
              alt='arrowIcon'
            />
            <img
              src='/images/leftarrow.png'
              className='leftArrowIcon'
              alt='arrowIcon'
            />
          </button>
          <button>
            <img
              src='/images/rightarrow2.png'
              className='rightArrowIcon'
              alt='arrowIcon'
            />
            <img
              src='/images/rightarrow.png'
              className='rightArrowIcon'
              alt='arrowIcon'
            />
          </button>
        </div>
      </>
    );
  }
}

export default CategoryBanner;
