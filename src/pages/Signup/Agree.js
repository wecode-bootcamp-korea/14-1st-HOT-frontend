import React, { Component } from "react";
import "./Signup.scss";

class Agree extends Component {
  render() {
    return (
      <section className="agree">
        <div className="contentAgree">약관 동의</div>
        <div className="agreeContainer">
          <div className="userSignup">
            <input className="checkBox" type="checkbox" />
            <span className="allAgree">전체동의</span>
          </div>
          <div className="fourteen">
            <input className="checkBox" type="checkbox" />
            <span className="addcontent">만 14세 이상입니다.</span>
            <span className="essential">(필수)</span>
          </div>
          <div className="useAgree">
            <input type="checkbox" />
            <span className="checkBox" type="checkbox" />
            <span className="undercontent">이용약관</span>
            <span className="essential">(필수)</span>
          </div>
          <div className="private">
            <input className="boxbox" type="checkbox" />

            <span className="undercontent">개인정보처리방침</span>
            <span className="essential">(필수)</span>
          </div>
          <div className="event">
            <input type="checkbox" />
            <span className="checkBox" type="checkbox" />
            <span className="addcontent">
              이벤트, 프로모션 알림 메일 및 SMS 수신
            </span>
            <span className="choice">(선택)</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Agree;
