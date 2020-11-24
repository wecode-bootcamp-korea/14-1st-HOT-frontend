import React, { Component } from "react";
import "./Mypage.scss";

const Mypage = [
  {
    id: 0,
    src: "./images/1.webp",
    alt: "img",
  },
  {
    id: 1,
    src: "./images/1.webp",
    alt: "img",
  },
  {
    id: 2,
    src: "./images/1.webp",
    alt: "img",
  },
  {
    id: 3,
    src: "./images/1.webp",
    alt: "img",
  },
  {
    id: 4,
    src: "./images/1.webp",
    alt: "img",
  },
  {
    id: 5,
    src: "./images/1.webp",
    alt: "img",
  },
  {
    id: 6,
    src: "./images/1.webp",
    alt: "img",
  },
];

class MypageFeed extends Component {
  render() {
    return (
      <div className="MypageFeed">
        <div className="rightContaienr">
          <div className="rightFeed">
            <div className="Feed">
              {Mypage.map((el) => {
                return (
                  <div className="feedImg">
                    <img src={el.src} alt={el.alt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MypageFeed;
