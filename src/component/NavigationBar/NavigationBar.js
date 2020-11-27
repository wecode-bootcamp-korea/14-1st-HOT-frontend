import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Firstcategory from './Firstcategory';
import Secondcategory from './Secondcategory';
import './NavigationBar.scss';

class NavigationBar extends React.Component {
  state = {
    communitytoggle: true,
  };

  goToSignUpPage = () => {
    this.props.history.push('/signup');
  };

  goToLoginPage = () => {
    this.props.history.push('/login');
  };

  goToCart = () => {
    this.props.history.push('/cart');
  };

  handleEnterCommunity = (e) => {
    this.setState({ communitytoggle: true, storetoggle: false });
  };

  handleEnterStore = (e) => {
    this.setState({ communitytoggle: false, storetoggle: true });
  };

  render() {
    const { communitytoggle, storetoggle } = this.state;
    const { goToSignUpPage, goToLoginPage, goToCart } = this;
    return (
      <>
        <div className='backgourndContainer'>
          <div className='NavigationBar'>
            <div className='Nav'>
              <div className='categoriesBox'>
                <div className='logoIcon'>
                  <img src='https://ifh.cc/g/RggtKz.png' alt='home' />
                </div>
                <div className='categories'>
                  <button
                    className='category'
                    onMouseEnter={this.handleEnterCommunity}>
                    커뮤니티
                  </button>
                  <button
                    className='category'
                    onMouseEnter={this.handleEnterStore}
                    onClick>
                    스토어
                  </button>
                  <button className='category' to=''>
                    인테리어시공
                  </button>
                </div>
              </div>
              <div className='managementBox'>
                <div className='searchBar'>
                  <input type='text' placeholder='오늘의집 통합검색' />
                  <img src='https://ifh.cc/g/urbj76.png' alt='search' />
                </div>
                <div className='management'>
                  <div className='enterPage'>
                    <span className='navLogin' onClick={goToLoginPage}>
                      로그인
                    </span>
                    <span className='navDivLine'></span>
                    <span className='navSignup' onClick={goToSignUpPage}>
                      회원가입
                    </span>
                    <Link className='cart' onClick={goToCart}>
                      <img src='https://ifh.cc/g/ZXGIqI.png' alt='cart' />
                    </Link>
                    <Link className='mypage' to='/mypage'>
                      <img src='https://ifh.cc/g/YyKeNZ.png' alt='mypage' />
                    </Link>
                  </div>
                  <button className='button'>
                    글쓰기
                    <div className='showIconBox'>
                      <img
                        src='https://ifh.cc/g/DYWxew.png'
                        className='showIcon'
                        alt='showIcon'
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='subNav'>
          {communitytoggle && (
            <Firstcategory onEnter={this.handleEnterCommunity} />
          )}
          {storetoggle && <Secondcategory onEnter={this.handleEnterStore} />}
        </div>
      </>
    );
  }
}

export default withRouter(NavigationBar);
