import React, { Component } from 'react';
import Slider from 'react-slick';
import './Banner.scss';

class Banner extends Component {
  render() {
    const settings = {
      arrows: false,
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
        </div>
      </>
    );
  }
}

export default Banner;
