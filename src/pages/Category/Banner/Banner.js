import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../component/Banner/NextArrow';
import PrevArrow from '../../../component/Banner/PrevArrow';
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
      { id: 2, url: 'https://ifh.cc/g/EfWFgX.jpg' },
      { id: 3, url: 'https://ifh.cc/g/l0W00A.jpg' },
      { id: 4, url: 'https://ifh.cc/g/EfWFgX.jpg' },
    ];
    const { category_name, subcategories } = this.props.giveCarTitle;
    const { subcategory_name } = this.props.giveSubTitle;
    return (
      <>
        <div className='bannerTitle'>
          <span className='bannerTitletext'>{category_name}</span>
          <span> {'>'} </span>
          <span className='bannerTitletext'>
            {subcategories &&
            subcategories.some(
              (ele) => ele.subcategory_name === subcategory_name
            )
              ? subcategory_name
              : ''}
          </span>
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
