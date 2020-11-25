import React, { Component } from "react";
// import { BsHeart } from "react-icons/bs";
// import ReplyComments from "./ReplyComments";

class Reply extends Component {
  constructor() {
    super();
    this.state = {
      showlist: true,
      text: "",
      list: [],
    };
  }

  reReply = () => {
    this.setState({ showlist: false });
  };

  handleInput = (e) => {
    this.setState({ text: e.target.value });
  };

  addReReply = (e) => {
    e.preventDefault();
    const { text, list } = this.state;
    if (text.length) {
      this.setState({
        list: [...list, text],
        text: "",
      });
    }
  };

  render() {
    const { id, image, username, comment } = this.props;
    return (
      <div className="Reply">
        <li className="ReplyList">
          <article className="ReplyContent">
            <p className="ReplyText">
              <a className="ReplyUserName" href="/">
                <img className="ReplyUserProfile" src={image} alt="" />
                <span className="ReplyUserId">{username}</span>
              </a>
              <span className="ReplyPostText">{comment}</span>
            </p>
            <footer className="ReplyFooter">
              <time className="ReplyFooterTime">몇분전</time>
              <button className="ReplyLike">
                {/* <BsHeart /> */}
                좋아요
              </button>
              <button className="AddReReply" onClick={this.reReply}>
                답글달기
              </button>
              <button className="ReplyDelite" onClick={this.removeReply}>
                삭제
              </button>
            </footer>
          </article>
        </li>
        <div className={this.state.showlist ? "hide" : "show"}>
          <div className="reReplyWrap">
            <ul className="reReplyList">
              {/* {this.state.list.map((text, idx) => {
                return (
                  <ReReply
                    key={idx}
                    comment={text}
                    userId={username}
                    userImage={userimage}
                  />
                );
              })} */}
            </ul>
            <form onSubmit={this.addReReply} className="reReplyForm">
              <div className="reReplyUser">
                <img src="/images/Communityimages/chair.jpg" alt="" />
              </div>
              <div className="reReplyText">
                <input
                  value={this.state.text}
                  className="reReplyInput"
                  onChange={this.handleInput}
                  type="text"
                />
                <button className="reReplyButton">등록</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reply;
