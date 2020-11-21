import React, { Component } from 'react';
import "./Signup.scss";

class Password extends Component {
  constructor() {
    super();
  }

  handleInputChange = (e) => {
    e.target.className === "pw"
      ? this.setState({ pw: e.target.value })
      : this.setState({ rePw: e.target.value });
  };

  render() {
    return (
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
    );
  }
}

export default Password;