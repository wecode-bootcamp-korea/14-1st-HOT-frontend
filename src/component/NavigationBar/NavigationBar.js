import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className='navBackgruond'>
          <div className='NavigationBar'>
            <div className='Nav'>
              <div className='categoriesBox'>
                <div className='logoIcon'>
                  <img src='./images/logo_text.png' alt='home' />
                </div>
                <div className='categories'>
                  <Link className='category' to=''>
                    커뮤니티
                  </Link>
                  <Link className='category' to=''>
                    스토어
                  </Link>
                  <Link className='category' to=''>
                    인테리어시공
                  </Link>
                </div>
              </div>
              <div className='managementBox'>
                <div className='searchBar'>
                  <input type='text' placeholder='오늘의집 통합검색' />
                  <img src='./images/loupe.png' alt='search' />
                </div>
                <div className='management'>
                  <div className='cart'>
                    <img src='./images/shopping-cart.png' alt='cart' />
                  </div>
                  <div className='enterPage'>
                    <span className='navLogin'>로그인</span>
                    <span className='navDivLine'>⎮</span>
                    <span className='navSignup'>회원가입</span>
                  </div>
                  <button className='button'>
                    글쓰기
                    <div className='showIconBox'>
                      <img
                        src='/images/showIcon_white.png'
                        className='showIcon'
                        alt='showIcon'
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='navBarBorder'></div>
          <div className='subNav'>
            <div className='subNavContents '>
              <Link className='subNavContent' to=''>
                사진
              </Link>
              <Link className='subNavContent' to=''>
                집들이
              </Link>
              <Link className='subNavContent' to=''>
                노하우
              </Link>
              <Link className='subNavContent' to=''>
                전문가집들이
              </Link>
              <Link className='subNavContent' to=''>
                셀프가이드
              </Link>
              <Link className='subNavContent' to=''>
                질문과답변
              </Link>
              <Link className='subNavContent' to=''>
                이벤트
              </Link>
            </div>
            <div className='subNavContentss '>
              <Link className='subNavContent' to=''>
                카테고리
              </Link>
              <Link className='subNavContent' to=''>
                신혼가구
              </Link>
              <Link className='subNavContent' to=''>
                베스트
              </Link>
              <Link className='subNavContent' to=''>
                오늘의딜
              </Link>
              <Link className='subNavContent' to=''>
                겨울빅세일
              </Link>
              <Link className='subNavContent' to=''>
                크리스마스
              </Link>
              <Link className='subNavContent' to=''>
                기획전
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavigationBar;
