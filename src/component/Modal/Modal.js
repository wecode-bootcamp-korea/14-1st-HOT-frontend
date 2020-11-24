import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  render() {
    return (
      <div className='showMonalPage'>
        <div className='cartButtonBox'>
          <p className='notificationPhrase'>장바구니에 상품을 담았습니다</p>
          <button className='moveCartButton'>장바구니 보러가기</button>
          <button className='cancleButton' onClick={this.props.takeModalEvent}>
            확인
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
