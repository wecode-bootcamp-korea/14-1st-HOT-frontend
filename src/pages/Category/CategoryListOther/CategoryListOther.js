import React, { Component } from 'react';
import './CategoryListOther.scss';

class CategoryListOther extends Component {
  render() {
    const { other } = this.props;
    return (
      <>
        <div className='categoryOtherListBox'>
          {other.map((ele) => (
            <div className=''>
              <div className='categoryList'>
                <span>{ele.title}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CategoryListOther;
