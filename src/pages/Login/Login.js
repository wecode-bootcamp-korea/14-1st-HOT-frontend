import React from "react";
import "./Login.scss";
import { LOGIN_API } from "../../config";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      token: "",
    };
  }

  checkValidation = (e) => {
    console.log("성공");
    const { id, pw } = this.state;
    fetch(LOGIN_API, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          this.setState({ token: res.access_token });
          localStorage.setItem("token", res.access_token);
          alert("성공, 다행이다..");
          this.props.history.push("/feedList");
        } else {
          localStorage.removeItem("token");
          alert(
            "실패, data는 거짓말을 하지 않아요 천천히 email과 password를 살펴보아요!"
          );
        }
      });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.checkValidation();
    }
  };

  handleInputChange = (e) => {
    const { className, value } = e.target;
    this.setState({ [className]: value });
  };

  render() {
    return (
      <main className="Login">
        <section className="loginContainer">
          <div className="loginLogo">
            <img src="./images/logo.png" alt="logo" />
            <img
              className="tomorrowHouse"
              src="./images/logo_text.png"
              alt="logo"
            />
          </div>
          <input
            type="text"
            className="id"
            placeholder="이메일"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            className="pw"
            placeholder="비밀번호"
            onChange={this.handleInputChange}
            // onKeyUp={this.handleKeyPress}
          />
          <button
            className="loginButton"
            onClick={this.checkValidation}
            onKeyUp={this.handleKeyPress}
          >
            로그인
          </button>
          <div className="newJoin">
            <span className="resetPw">비밀번호 재설정</span>
            <span className="signIn">회원가입</span>
          </div>
          <div className="snsLogin">
            <h2 className="simpleLogin">SNS계정으로 간편 로그인/회원가입</h2>
            <div className="iconList">
              <img
                className="snsIcon"
                src="./images/facebook.png"
                alt="페이스북"
              />
              <img
                className="snsIcon"
                src="./images/kakao.png"
                alt="카카오톡"
              />
              <img className="snsIcon" src="./images/naver.png" alt="네이버" />
            </div>
          </div>
          <div className="nonMembership">
            <button className="nonMember">비회원 주문 조회하기</button>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
