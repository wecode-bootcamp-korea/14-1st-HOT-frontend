import React, { Component } from 'react';
import './ListOther.scss';

class ListOther extends Component {
  render() {
    const { other } = this.props;
    return (
      <>
        <div className='otherListBox'>
          {other.map((otherElement, otherIndex) => (
            <div className='' key={otherIndex}>
              <div className='otherList'>
                <span>{otherElement.title}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ListOther;
