import React, { Component } from 'react';
import './NextArrow.scss';

class NextArrow extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className='nextArrowBox' onClick={onClick}>
        <img
          src='/images/rightarrow.png'
          className='nextArrow'
          alt='arrow next'
        />
        <img
          src='/images/rightarrow2.png'
          className='hideNextArrow'
          alt='arrow next'
        />
      </div>
    );
  }
}

export default NextArrow;
