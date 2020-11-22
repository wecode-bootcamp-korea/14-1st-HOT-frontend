import React, { Component } from "react";

class Mypage extends Component {
  render() {
    return (
      <section className="Mypage">
        <div className="userProfile">
          <div className="userProfileContainer">
            <img src="./images/user.png" alt="user" />
            <div className="userInfo">
              <div>H.O.T</div>
              <div className="following">
              <span>팔로워 0</span>
              <span>팔로잉 0</span>
              </div>
              <button
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Mypage;
