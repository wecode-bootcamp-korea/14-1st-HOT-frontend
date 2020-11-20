import React, { Component } from 'react';
import Slider from 'react-slick';
import './Banner.scss';

class Banner extends Component {
  SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      />
    );
  };

  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
    };
    const slideSampleImage = [
      { id: 1, url: 'images/event1.png' },
      { id: 2, url: 'images/event1.png' },
      { id: 3, url: 'images/event1.png' },
      { id: 4, url: 'images/event1.png' },
    ];
    return (
      <>
        <div className='bannerTitle'>
          <span className='bannerTitletext'>가구</span>
          <span> {'>'} </span>
          <span className='bannerTitletext'>소파/거실</span>
        </div>
        <div className='bannerImageBox'>
          <Slider {...settings}>
            {slideSampleImage.map((image) => {
              return (
                <div key={image.id} className='bannerImageBox'>
                  <img
                    src={image.url}
                    alt='bannerImage'
                    className='bannerImage'
                  />
                </div>
              );
            })}
          </Slider>
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
