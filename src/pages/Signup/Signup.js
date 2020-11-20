import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pw: "",
      re_pw: "",
      nickname: "",
    };
  }

  handleInputChange = (e) => {
    e.target.className === "pw"
      ? this.setState({ pw: e.target.value })
      : this.setState({ rePw: e.target.value });
  };

  checkValidation = (e) => {
    const { pw, rePw } = this.state;
    const checkpw = pw.length >= 8;
    const checkrePw = (pw = rePw);
  };

  render() {
    return (
      // const { pwInput, rePwInput } = this.state;
      <div className="page">
        <section className="container">
          <div className="logo">
            <img className="thou" src="./images/logo.png" alt="logo" />
            <img className="text" src="./images/logo_text.png" alt="text" />
          </div>
          <section className="box">
            <div className="userInfo">
              <div className="signUp">회원가입</div>
              <div className="simple">
                <div className="simpleSignup">
                  SNS계정으로 간편하게 회원가입
                </div>
                <div className="icons">
                  <img
                    className="icon"
                    src="./images/facebook.png"
                    alt="facebook"
                  />
                  <img className="icon" src="./images/kakao.png" alt="kakao" />
                  <img
                    className="icon"
                    src="./images/naver.png"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
            <section className="emailAddress">
              <div className="email">이메일</div>
              <input className="emailInput" type="text" placeholder="이메일" />
              <span className="at">@</span>
              <select>
                <option value="선택해주세요" selected="selected">
                  선택해주세요
                </option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="icloud.com">icloud.com</option>
                <option value="_manual">직접입력</option>
              </select>
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
                className="nicknameInput"
                type="text"
                placeholder="별명 (2~15자)"
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
