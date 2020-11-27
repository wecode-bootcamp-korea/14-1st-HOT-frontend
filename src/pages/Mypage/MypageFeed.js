import "./Mypage.scss";
import React, { Component } from "react";

class MypageFeed extends Component {
  render() {
    const { myPageImage } = this.props;

    return (
      <div className="MypageFeed">
        <div className="rightContaienr">
          <div className="Feed">
            {myPageImage?.map((el) => {
              return (
                <div className="feedImgBox">
                  <img className="feedImg" src={el.image_url} alt={el.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MypageFeed;
