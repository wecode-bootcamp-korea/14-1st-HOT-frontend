import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import "./FeedList.scss";
import "./itemWrap.scss";

class ItemWrap extends Component {
  constructor() {
    super();
    this.state = {
      heart: true,
      bookmark: true,
    };
  }

  goToDetail = () => {
    this.props.history.push(`/posts/${this.props.id}`);
  };

  countLikes = () => {
    this.setState({
      heart: !this.state.heart,
    });
  };

  countBookmarks = () => {
    this.setState({
      bookmark: !this.state.bookmark,
    });
  };

  render() {
    const {
      id,
      userImage,
      userName,
      postImage,
      countLikes,
      countBookmarks,
      countComments,
      postWrite,
      comment,
    } = this.props;

    return (
      <div className="itemWrap">
        <article className="item">
          <div className="itemUser">
            <div className="itemUserImage">
              <img src={userImage} alt="userProfile" />
            </div>
            <div className="itemUserName">
              <div className="userName">{userName}</div>

              <button className="followWriter">팔로우</button>
            </div>
          </div>

          <div className="itemContent">
            <div onClick={this.goToDetail} className="itemContentImage">
              <img src={postImage} alt="postMainImage" />
            </div>
            <div className="itemContentLikes">
              <button onClick={this.countLikes} className="contentLike">
                {this.state.heart ? (
                  <BsHeart className="heart" />
                ) : (
                  <BsHeartFill className="clickedHeart" />
                )}
                <span className="counts">{countLikes}</span>
              </button>
              <button onClick={this.countBookmarks} className="contentScrap">
                {this.state.bookmark ? (
                  <BsBookmark className="bookmark" />
                ) : (
                  <BsBookmarkFill className="clickedBookmark" />
                )}
                <span className="counts">{countBookmarks}</span>
              </button>
              <div className="goToComment">
                <a onClick={this.goToComment} className="contentComment">
                  <FaRegComment className="comment" />
                  <span className="counts">{countComments}</span>
                </a>
              </div>
            </div>
            <div className="itemContentParagraph">
              <span>{postWrite}</span>
            </div>
            {comment && comment.length > 0 && (
              <div className="itemContentComment">
                <img src={comment[0].author_profile} alt="authorUserProfile" />
                <div>{comment[0].author_username}</div>
                <div>{comment[0].content}</div>
              </div>
            )}
          </div>
        </article>
      </div>
    );
  }
}

export default withRouter(ItemWrap);
