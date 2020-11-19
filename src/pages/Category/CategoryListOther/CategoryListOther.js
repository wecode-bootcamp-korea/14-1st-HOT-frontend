import React, { Component } from 'react';
import './CategoryListOther.scss';

class CategoryListOther extends Component {
  render() {
    const { other } = this.props;
    return (
      <>
        <div className='categoryOtherListBox'>
          {other.map((otherElement, otherIndex) => (
            <div className='' key={otherIndex}>
              <div className='categoryList'>
                <span>{otherElement.title}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CategoryListOther;
