import React, { Component } from "react";

import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import "./FeedList.scss";
import "./itemWrap.scss";

class ItemWrap extends Component {
  render() {
    const {
      userImage,
      userName,
      postImage,
      countlikes,
      countbookmarks,
      countcomments,
      postwrite,
      postcontent,
    } = this.props;
    return (
      <div className="itemWrap">
        <article className="item">
          <div className="itemUser">
            <div onClick={this.goToWriterProfile} className="itemUserImage">
              <img src={userImage} alt="" />
            </div>
            <div className="itemUserName">
              <div onClick={this.click} className="userName">
                {userName}
              </div>

              <button className="followWriter">팔로우</button>
            </div>
          </div>

          <div className="itemContent">
            <div onClick={this.goToDetail} className="itemContentImage">
              <img src={postImage} alt="" />
            </div>
            <div className="itemContentLikes">
              <button onClick={this.countLikes} className="contentLike">
                <BsHeart className="icon" />
                <span className="counts">{countlikes}</span>
              </button>
              <button onClick={this.countBookmarks} className="contentScrap">
                <BsBookmark className="icon icon2" />
                <span className="counts">{countbookmarks}</span>
              </button>
              <div className="goToComment">
                <a onClick={this.goToComment} className="contentComment">
                  <FaRegComment className="icon" />
                  <span className="counts">{countcomments}</span>
                  <span>{/* 디테일페이지의 댓글 개수를 불러와야함 */}</span>
                </a>
              </div>
            </div>
            <div className="itemContentParagraph">
              <span>{postwrite}</span>
            </div>
            <div className="itemContentComment">
              <img src={userImage} alt="" />
              <div>{postcontent}</div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default ItemWrap;
