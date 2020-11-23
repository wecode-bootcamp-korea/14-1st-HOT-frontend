import React, { Component } from "react";
import "./Mypage.scss";

class Mypage extends Component {
  render() {
    return (
      <section className="Mypage">
        <div className="bigContainer">
          <div className="userProfileContainer">
            <div className="userProfile">
              <div>
                <img className="userImg" src="./images/user.png" alt="user" />
              </div>
              <div className="userInfo">
                <div className="username">wecode H.O.T</div>
                <div className="following">
                  <span className="follower">팔로워 492</span>
                  <span className="line">|</span>
                  <span className="following">팔로잉 285</span>
                  <br></br>
                </div>
                <button className="button">설정</button>
              </div>
            </div>
            <div className="userLink">
              <div className="scrap">
                <img
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mypage;
