<<<<<<< HEAD
import React, { Component } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import Simplesignup from './Simplesignup.js';
import Agree from './Agree';

const API = 'http://10.58.5.85:8000/user/register';
=======
import React, { Component } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";
import Simplesignup from "./Simplesignup.js";
import Agree from "./Agree";
import { API } from "../../config";
>>>>>>> master

class Signup extends Component {
  state = {
    data: {},
  };

  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      name: '',
    };
  }

  handleClick = () => {
    const { id, pw, name } = this.state;

    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        username: name,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    if (this.state.data.message === 'success') {
      alert('회원가입이 완료되었습니다.');
      this.props.history.push('/');
    } else {
      alert(this.state.data.message);
    }
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='Signup'>
        <section className='userContainer'>
          <div className='logo'>
            <img className='thou' src='./images/logo.png' alt='logo' />
            <img className='text' src='./images/logo_text.png' alt='text' />
          </div>
          <section className='box'>
            <Simplesignup />
            <section className='emailAddress'>
              <div className='email'>이메일</div>
              <input
                className='emailInput'
                type='email'
                name='email'
                placeholder='이메일'
                onChange={this.handleInputChange}
              />
            </section>
            <section className='pwAddress'>
              <div className='pw'>비밀번호</div>
              <div className='condition'>8자 이상 입력해주세요.</div>
              <input
                className='pwInput'
                type='password'
                name='pw'
                placeholder='비밀번호'
                onChange={this.handleInputChange}
              />
            </section>
            <section className='rePwAddress'>
              <div className='rePw'>비밀번호 확인</div>
              <input
                className='rePwInput'
                type='password'
                name='pwCheck'
                placeholder='비밀번호 확인'
                onChange={this.handleInputChange}
              />
            </section>
            <section className='nickname'>
              <div className='name'>별명</div>
              <div className='content'>
                다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
              </div>
              <input
                className='nicknameActivate'
                type='text'
                name='nickname'
                placeholder='별명 (2~15자)'
                onChange={this.handleInputChange}
              />
            </section>
            <Agree />
            <button
              className='signupButton'
              onClick={(e) => this.handleClick(e)}>
              회원가입 완료
            </button>
            <div className='alreadySignup'>
              <span className='haveId'>이미 아이디가 있으신가요?</span>
              <Link className='reLogin' to='/login'>
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
