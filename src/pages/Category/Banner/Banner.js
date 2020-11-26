import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../component/Slick/NextArrow';
import PrevArrow from '../../../component/Slick/PrevArrow';
import './Banner.scss';

class Banner extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const slideSampleImage = [
      { id: 1, url: 'https://ifh.cc/g/l0W00A.jpg' },
      { id: 2, url: 'https://ifh.cc/g/l0W00A.jpg' },
      { id: 3, url: 'https://ifh.cc/g/l0W00A.jpg' },
      { id: 4, url: 'https://ifh.cc/g/l0W00A.jpg' },
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
