import React, { Component } from "react";
import "./Mypage.scss";
import MypageFeed from "./MypageFeed";

class Mypage extends Component {
  render() {
    return (
      <section className="Mypage">
        <div className="bigContainer">
          <div className="leftContainer">
            <div className="userProfileContainer">
              <div className="share">
                <img src="./images/share.png" alt="share" />
              </div>
              <div className="userProfile">
                <div className="userimage">
                  <img src="./images/profileimg.png" alt="user" />
                </div>
                <div className="userInfo">
                  <div className="username">jumin</div>
                  <div className="following">
                    <span className="follower">팔로워</span>
                    <span className="followerNumber">492</span>
                    <span className="line">|</span>
                    <span className="following">팔로잉</span>
                    <span className="followingNumber">285</span>
                    <br></br>
                  </div>
                  <button className="button">설정</button>
                </div>
              </div>
              <div className="userLink">
                <div className="box">
                  <img className="img" src="./images/scrap.png" alt="scrap" />
                  <div className="content">스크랩북</div>
                  <div className="number">249</div>
                </div>
                <div className="box">
                  <img className="img" src="./images/heart.png" alt="heart" />
                  <div className="content">좋아요</div>
                  <div className="number">482</div>
                </div>
                <div className="box">
                  <img
                    className="img"
                    src="./images/shopping-cart.png"
                    alt="cart"
                  />
                  <div className="content">장바구니</div>
                  <div className="number">22</div>
                </div>
              </div>
            </div>
            <div className="getCoupon">
              <span className="add">친구 초대하고</span>
              <span className="point">5,000P</span>
              <span className="get">받기</span>
              <img className="arrow" src="./images/right.png" alt="arrow" />
            </div>
          </div>
          <MypageFeed />
        </div>
      </section>
    );
  }
}

export default Mypage;
