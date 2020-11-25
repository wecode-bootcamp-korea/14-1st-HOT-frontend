import React, { Component } from 'react';
import './ListOther.scss';

class ListOther extends Component {
  render() {
    const { other } = this.props;
    console.log(this.props.other);
    return (
      <>
        <div className='otherListBox'>
          {other.map((otherElement, otherIndex) => (
            <div className='' key={otherIndex}>
              <div className='otherList'>
                <span>{otherElement.menu_name}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ListOther;
