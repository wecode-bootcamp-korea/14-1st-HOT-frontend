import React from "react";
import "./Footer.scss";
import FOOTERLIST from "./FooterList";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="homeFooter">
        <footer className="container">
          <div className="footerTop">
            <div className="customService">
              고객센터
              <img src="./images/right.png" alt="rightarrow" />
            </div>
            <div className="phone">1670-1234</div>
            <div className="time">평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</div>
          </div>
          <FOOTERLIST />
          <div className="logoIcons">
            <img className="icon" src="./images/apple.png" alt="apple" />
            <img className="icon" src="./images/google-play.png" alt="apple" />
            <img
              className="icon"
              src="./images/facebook-logo.png"
              alt="apple"
            />
            <img className="icon" src="./images/instagram.png" alt="apple" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
