import React from "react";
import { Link } from "react-router-dom";
import Firstcategory from "./Firstcategory";
import Secondcategory from "./Secondcategory";
import "./NavigationBar.scss";

class NavigationBar extends React.Component {
  state = {
    communitytoggle: true,
    storetoggle: false,
  };

  handleEnterCommunity = (e) => {
    this.setState({ communitytoggle: true });
    this.setState({ storetoggle: false });
  };

  handleEnterStore = (e) => {
    this.setState({ communitytoggle: false });
    this.setState({ storetoggle: true });
  };

  render() {
    const { communitytoggle, storetoggle } = this.state;

    return (
      <div className="navBackgruond">
        <div className="NavigationBar">
          <div className="Nav">
            <div className="categoriesBox">
              <div className="logoIcon">
                <img src="./images/logo_text.png" alt="home" />
              </div>
              <div className="categories">
                <button
                  className="category"
                  to=""
                  onMouseLeave={this.handleLeaveCommunity}
                  onMouseEnter={this.handleEnterCommunity}
                >
                  커뮤니티
                </button>
                <button
                  className="category"
                  to=""
                  onMouseLeave={this.handleLeaveStore}
                  onMouseEnter={this.handleEnterStore}
                >
                  스토어
                </button>
                <button className="category" to="">
                  인테리어시공
                </button>
              </div>
            </div>
            <div className="managementBox">
              <div className="searchBar">
                <input type="text" placeholder="오늘의집 통합검색" />
                <img src="./images/loupe.png" alt="search" />
              </div>
              <div className="management">
                <Link className="cart" to="/pages/Mypage/Mypage">
                  <img src="./images/shopping-cart.png" alt="cart" />
                </Link>
                <div className="mypage">
                  <img src="./images/profileimg.png" alt="mypage" />
                </div>
                <div className="enterPage">
                  <span className="navLogin">로그인</span>
                  <span className="navDivLine">⎮</span>
                  <span className="navSignup">회원가입</span>
                </div>
                <button className="button">
                  글쓰기
                  <div className="showIconBox">
                    <img
                      src="/images/showIcon_white.png"
                      className="showIcon"
                      alt="showIcon"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navBarBorder"></div>
        <div className="subNav">
          {communitytoggle && (
            <Firstcategory onEnter={this.handleEnterCommunity} />
          )}
          {storetoggle && <Secondcategory onEnter={this.handleEnterStore} />}
        </div>
      </div>
    );
  }
}

export default NavigationBar;
