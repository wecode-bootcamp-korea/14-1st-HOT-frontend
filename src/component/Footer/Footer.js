import React from 'react';
import './Footer.scss';
import FOOTERLIST from './FooterList';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='homeFooter'>
        <footer className='container'>
          <div className='top'>
            <div className='footerTop'>
              <div className='customService'>
                고객센터
                <img src='./images/right.png' alt='rightarrow' />
              </div>
              <div className='phone'>1670-1234</div>
              <div className='time'>
                평일 09:00 ~ 18:00 (주말 & 공휴일 제외)
              </div>
            </div>
            <div className='logoIcons'>
              <img className='icon' src='./images/apple.png' alt='apple' />
              <img
                className='icon'
                src='./images/google-play.png'
                alt='apple'
              />
              <img
                className='icon'
                src='./images/facebook-logo.png'
                alt='apple'
              />
              <img className='icon' src='./images/instagram.png' alt='apple' />
              <img className='icon' src='./images/twitter.png' alt='apple' />
            </div>
          </div>

          <FOOTERLIST />
          <div className='info'>
            <div className='information'>
              상호명 : (주)House Of Tomorrow &nbsp; 이메일 : (고객문의)
              cs@tomorrowhou.net &nbsp; 대표이사 : 안상혁 &nbsp; 사업자등록번호
              : 381-29-21234 &nbsp; 통신판매업신고번호 : 제2020-서울-위워크
              &nbsp; 주소 : 서울시 강남구 테헤란로 427 위워크타워 10층{' '}
            </div>
            <div className='information'>
              NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시,
              저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
            </div>
            <div className='information'>
              (주) 내일의 집은 통신판매중개자로서 통신판매의 당사자가 아니며,
              입점업체가 등록한 상품, 상품정보 및 거래에 대하여 (주) 오늘의 집은
              일체 책임을 지지 않습니다.
            </div>
            <div className='copyright'>
              Copyright © 2020 by HOT, Inc. All rights reserved
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
