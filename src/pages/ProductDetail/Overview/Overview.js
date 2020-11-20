import React, { Component } from 'react';
import './Overview.scss';

class Summary extends Component {
  render() {
    return (
      <div className='Overview'>
        <div className='product'>
          <div className='category'>
            {'가구'} {'>'} {'소파/거실가구'} {'>'} {'소파'} {'>'} {'일반소파'}
          </div>
          <div className='production'>
            <div className='coverImageBox'>
              <div className='coverImageListBox'>zz</div>
              <div className='coverImageWrap'>xx</div>
            </div>
            <div className='overViewBox'>
              <div className='seller'>zz</div>
              <div className='title'>xx</div>
              <div className='review'>
                <div className='reviewScore'>22</div>
                <div className='reviewCount'>22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
