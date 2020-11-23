import React from 'react';
import './Footer.scss';

const FOOTERLIST = [
  {
    id: 0,
    name: '브랜드 스토리',
  },
  {
    id: 1,
    name: '회사소개',
  },
  {
    id: 2,
    name: '채용정보',
  },
  {
    id: 3,
    name: '이용약관',
  },
  {
    id: 4,
    name: '개인정보처리방침',
  },
  {
    id: 5,
    name: '공지사항',
  },
  {
    id: 6,
    name: '고객센터',
  },
  {
    id: 7,
    name: '고객의 소리',
  },
  {
    id: 8,
    name: '전문가 등록',
  },
  {
    id: 9,
    name: '사업자 구매회원',
  },
  {
    id: 10,
    name: '제휴/광고 문의',
  },
  {
    id: 11,
    name: '입점신청 문의',
  },
];

class FooterList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className='footerlist'>
          {FOOTERLIST.map((element) => {
            return <div className='content'>{element.name}</div>;
          })}
        </div>
      </>
    );
  }
}

export default FooterList;
