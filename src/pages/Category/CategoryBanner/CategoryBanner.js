import React, { Component } from 'react';

class CategoryBanner extends Component {
  render() {
    return (
      <>
        <div className='categoryBannerTitle'>
          <span className='categoryBannerTitletext'>가구</span>
          <span> > </span>
          <span className='categoryBannerTitletext'>소파/거실</span>
        </div>
        <div className='categoryBannerImageBox'>
          <img
            src='/images/bannerSample.png'
            className='categoryBannerImage'
            alt='rollingBanner'
          />
        </div>
      </>
    );
  }
}

export default CategoryBanner;
