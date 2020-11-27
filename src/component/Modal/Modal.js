import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Modal.scss';

class Modal extends Component {
  goCart = () => {
    this.props.history.push('/cart');
  };

  render() {
    const { goCart } = this;
    const { takeModalEvent } = this.props;
    return (
      <div className='showMonalPage'>
        <div className='cartButtonBox'>
          <p className='notificationPhrase'>장바구니에 상품을 담았습니다</p>
          <button className='moveCartButton' onClick={goCart}>
            장바구니 보러가기
          </button>
          <button className='cancleButton' onClick={takeModalEvent}>
            확인
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Modal);
