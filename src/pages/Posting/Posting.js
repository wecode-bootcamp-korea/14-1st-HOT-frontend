import React, { Component } from "react";
import "./Posting.scss";
// import axios from "axios";

class Posting extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
    };
  }

  render() {
    return (
      <div className="Posting">
        <div className="postingTop">
          <img className="logo" src="./images/logo.png" alt="logo" />
          <img className="text" src="./images/logo_text.png" alt="text" />
        </div>
        <div className="container">
          <div className="postingImg">사진 올리기</div>
          <div className="selectContainer">
            <div className="allSelect">
              <select className="selectLeft">
                <option selected="selected">평수</option>
                <option>10평 미만</option>
                <option>10평대</option>
                <option>20평대</option>
                <option>30평대</option>
                <option>40평대</option>
                <option>50평 이상</option>
              </select>
              <select className="selectMiddle">
                <option selected="selected">주거형태</option>
                <option>원룸&오피스텔</option>
                <option>아파트</option>
                <option>빌라&연립</option>
                <option>단독주택</option>
                <option>사무공간</option>
                <option>상업공간</option>
                <option>기타</option>
              </select>
              <select className="selectRight">
                <option selected="selected">스타일</option>
                <option>모던</option>
                <option>북유럽</option>
                <option>빈티지</option>
                <option>내츄럴</option>
                <option>프로방스&로맨틱</option>
                <option>클래식&앤틱</option>
                <option>한국&아시아</option>
                <option>유니크</option>
              </select>
            </div>
          </div>
          <div className="card">
            <div className="buttonPhoto">
              <input type="file" className="addImg">
                <div className="content">
                  <img src="./images/photo-camera.png" alt="camera" />
                  <div className="text">
                    <div>사진 올리기</div>
                    <div>* 최대10장까지</div>
                  </div>
                </div>
              </input>
            </div>
            <section className="cardContent">
              <select className="topSelect">
                <option selected="selected">공간 (선택)</option>
                <option>원룸</option>
                <option>거실</option>
                <option>침실</option>
                <option>주방</option>
                <option>욕실</option>
                <option>아이방</option>
                <option>드레스룸</option>
                <option>서재&작업실</option>
                <option>베란다</option>
                <option>사무공간</option>
                <option>상업공간</option>
                <option>가구&소품</option>
                <option>현관</option>
                <option>외관&기타</option>
                <option>제품리뷰</option>
              </select>
              <input
                type="text"
                className="inputContent"
                placeholder="사진에 대해서 설명해주세요."
              />
              <div className="keywordInput">
                <input type="text" className="keyword" placeholder="키워드" />
              </div>
            </section>
          </div>
          <input type="text" className="urlInput" placeholder="URL" />
        </div>
        <footer className="underBar">
          <button className="postButton">올리기</button>
        </footer>
      </div>
    );
  }
}

export default Posting;
