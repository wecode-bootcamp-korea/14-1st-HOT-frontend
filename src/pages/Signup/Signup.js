import React, { Component } from "react";
import "./Signup.scss";
import Simplesignup from "./Simplesignup.js";
import Select from "./Select";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
    };
  }

  handleChangeEmail = (e) => {
    const { value } = e.target;
    this.setState({ idValue: value });
  };

  render() {
    console.log(this.state.idValue);
    return (
      <div className="page">
        <section className="container">
          <div className="logo">
            <img className="thou" src="./images/logo.png" alt="logo" />
            <img className="text" src="./images/logo_text.png" alt="text" />
          </div>
          <section className="box">
            <Simplesignup />
            <section className="emailAddress">
              <div className="email">이메일</div>
              <input
                className="emailInput"
                type="text"
                placeholder="이메일"
                onChange={(e) => this.handleChangeEmail(e)}
              />
              <span className="at">@</span>
              <Select />
            </section>
            <section className="pwAddress">
              <div className="pw">비밀번호</div>
              <div className="condition">8자 이상 입력해주세요.</div>
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                onChange={this.handleInputChange}
              />
            </section>
            <section className="rePwAddress">
              <div className="rePw">비밀번호 확인</div>
              <input
                className="rePwInput"
                type="password"
                placeholder="비밀번호 확인"
                onChange={this.handleInputChange}
              />
            </section>
            <section className="nickname">
              <div className="name">별명</div>
              <div className="content">
                다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
              </div>
              <input
                className="nicknameActivate"
                // className={activateButton ? "nicknameActivate" : "nicknameDeactivate"}
                type="text"
                placeholder="별명 (2~15자)"
                value={this.state.nickname}
                onChange={this.handleNickname}
              />
            </section>
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
            <button className="signupButton" onKeyPress={this.checkValidation}>
              회원가입 완료
            </button>
            <div className="alreadySignup">
              <span className="haveId">이미 아이디가 있으신가요?</span>
              <span className="reLogin">로그인</span>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Signup;
