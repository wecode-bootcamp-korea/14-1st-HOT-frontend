import React from "react";
import "./Login.scss";

const API = "http://10.58.0.125:8000/user/login";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick = (e) => {
    const { id, pw } = this.state;
    // console.log(this.state.id, this.state.pw);
    // console.log("hi");
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  handleInputChange = (e) => {
    const { className, value } = e.target;
    className === "id"
      ? this.setState({ id: value })
      : this.setState({ pw: value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.checkValidation();
    }
  };

  checkValidation = () => {
    const { id, pw } = this.state;

    if (id && pw) {
      alert("성공적으로 로그인했습니다.");
      this.props.history.push("/main");
    }

    if (!id || !pw) {
      alert("이메일 주소나 비밀번호가 틀립니다.");
    }
  };

  render() {
    return (
      <main className="login">
        <section className="container">
          <div className="loginLogo">
            <img className="logo" src="./images/logo.png" alt="logo" />
            <img className="thou" src="./images/logo_text.png" alt="logo" />
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
            onKeyPress={this.handleKeyPress}
          />
          <button
            className="loginButton"
            onClick={(this.checkValidation, this.handleClick)}
            onKeyPress={this.handleKeyPress}
          >
            로그인
          </button>
          <div className="newJoin">
            <span className="resetPw" href="dfd">
              비밀번호 재설정
            </span>
            <span className="signIn" href="dfsdf">
              회원가입
            </span>
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
