import React, { Component } from "react";
import "./Mypage.scss";
import MypageFeed from "./MypageFeed";
import Userlink from "./Userlink";
import { API } from "../../config";

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      myPageImage: [],
      bookmark_count: 0,
    };
  }

  componentDidMount() {
    fetch(API, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({ result: res.context }, () =>
          console.log("re", this.state.result)
        );
        this.setState({
          myPageImage: this.state.result.bookmark_products,
          bookmark_count: this.state.result.bookmark_count,
        });
      });
  }

  render() {
    const { myPageImage, bookmark_count } = this.state;

    return (
      <section className="Mypage">
        <div className="bigContainer">
          <div className="profileContainer">
            <div className="userProfileContainer">
              <div className="share">
                <img src="./images/share.png" alt="share" />
              </div>
              <div className="userProfile">
                <div className="userimage">
                  <img src="./images/wecode.jpeg" alt="user" />
                </div>
                <div className="userInfo">
                  <div className="username">wecode</div>
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
              <Userlink bookmark_count={bookmark_count} />
            </div>
            <div className="getCoupon">
              <span className="add">친구 초대하고</span>
              <span className="point">5,000P</span>
              <span className="get">받기</span>
              <img className="arrow" src="./images/right.png" alt="arrow" />
            </div>
          </div>
          <MypageFeed myPageImage={myPageImage} />
        </div>
      </section>
    );
  }
}

export default Mypage;
