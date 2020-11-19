import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
  render() {
    return (
      <>
        <div className='bannerTitle'>
          <span className='bannerTitletext'>가구</span>
          <span> {'>'} </span>
          <span className='bannerTitletext'>소파/거실</span>
        </div>
        <div className='bannerImageBox'>
          <img
            src='/images/bannerSample.png'
            className='bannerImage'
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

export default Banner;
