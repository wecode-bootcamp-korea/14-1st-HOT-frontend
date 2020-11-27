import React, { Component } from 'react';
import './PrevArrow.scss';

class PrevArrow extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className='prevArrowBox' onClick={onClick}>
        <img
          src='/images/leftarrow.png'
          className='prevArrow'
          alt='arrow next'
        />
        <img
          src='/images/leftarrow2.png'
          className='prevHideArrow'
          alt='arrow next'
        />
      </div>
    );
  }
}

export default PrevArrow;
