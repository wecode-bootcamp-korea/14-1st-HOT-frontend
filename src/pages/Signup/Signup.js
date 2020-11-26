import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";
import Simplesignup from "./Simplesignup.js";
import Agree from "./Agree";
import { SIGNUP_API } from "../../config";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      username: "",
    };
  }

  checkValidation = (e) => {
    console.log("성공");
    const { email, pw, username } = this.state;
    fetch(SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pw,
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          alert("된다.. 다행..");
          this.props.history.push("/login");
        } else {
          console.log(res.message);
          alert("다시해");
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
      <div className="Signup">
        <section className="userContainer">
          <div className="logo">
            <img className="thou" src="./images/logo.png" alt="logo" />
            <img className="text" src="./images/logo_text.png" alt="text" />
          </div>
          <section className="box">
            <Simplesignup />
            <section className="emailAddress">
              <div className="emailName">이메일</div>
              <input
                type="email"
                className="email"
                placeholder="이메일"
                onChange={this.handleInputChange}
              />
            </section>
            <section className="pwAddress">
              <div className="pwCondition">비밀번호</div>
              <div className="condition">8자 이상 입력해주세요.</div>
              <input
                type="password"
                className="pw"
                placeholder="비밀번호"
                onChange={this.handleInputChange}
              />
            </section>
            <section className="rePwAddress">
              <div className="rePassword">비밀번호 확인</div>
              <input
                type="password"
                className="rePw"
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
                type="text"
                className="username"
                placeholder="별명 (2~15자)"
                onChange={this.handleInputChange}
              />
            </section>
            <Agree />
            <button
              className="signupButton"
              onClick={this.checkValidation}
              onKeyPress={this.handleKeyPress}
            >
              회원가입 완료
            </button>
            <div className="alreadySignup">
              <span className="haveId">이미 아이디가 있으신가요?</span>
              <Link className="reLogin" to="/login">
                로그인
              </Link>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Signup;
