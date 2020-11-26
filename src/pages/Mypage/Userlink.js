import React, { Component } from "react";
import "./Mypage.scss";

class Userlink extends Component {
  render() {
    const { bookmark_count } = this.props;

    return (
      <div className="userLink">
        <div className="box">
          <img className="img" src="./images/scrap.png" alt="scrap" />
          <div className="content">스크랩북</div>
          <div className="number">{bookmark_count}</div>
        </div>
        <div className="box">
          <img className="img" src="./images/heart.png" alt="heart" />
          <div className="content">좋아요</div>
          <div className="number">14</div>
        </div>
        <div className="box">
          <img className="img" src="./images/shopping-cart.png" alt="cart" />
          <div className="content">장바구니</div>
          <div className="number">22</div>
        </div>
      </div>
    );
  }
}

export default Userlink;
