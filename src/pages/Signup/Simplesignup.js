import React, { Component } from "react";
import "./Signup.scss";

class Simplesignup extends Component {
  render() {
    return (
      <div className="userInfo">
        <div className="signUp">회원가입</div>
        <div className="simple">
          <div className="simpleSignup">SNS계정으로 간편하게 회원가입</div>
          <div className="icons">
            <img className="icon" src="./images/facebook.png" alt="facebook" />
            <img className="icon" src="./images/kakao.png" alt="kakao" />
            <img className="icon" src="./images/naver.png" alt="facebook" />
          </div>
        </div>
      </div>
    );
  }
}

export default Simplesignup;
