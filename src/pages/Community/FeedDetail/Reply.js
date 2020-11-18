import React, { Component, Fragment } from "react";
import { BsHeart } from "react-icons/bs";
import ReReply from "./ReReply";
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
    if (text.length > 0) {
      this.setState({
        list: [...list, text],
        text: "",
      });
    }
  };

  render() {
    return (
      <div className="Reply">
        <li className="ReplyList">
          <article className="ReplyContent">
            <p className="ReplyText">
              <a className="ReplyUserName" href="/">
                <img
                  className="ReplyUserProfile"
                  src={this.props.profileImage}
                  alt=""
                />
                <span className="ReplyUserId">{this.props.userId}</span>
              </a>
              <span className="ReplyPostText">{this.props.comment}</span>
            </p>
            <footer className="ReplyFooter">
              <time className="ReplyFooterTime">몇분전</time>
              <button className="ReplyLike">
                <BsHeart />
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
        <div className={this.state.showlist === true ? "hide" : "show"}>
          <div className="reReplyWrap">
            <ul className="reReplyList">
              {this.state.list.map((text) => {
                return <ReReply comment={text} />;
              })}
            </ul>
            <form onSubmit={this.addReReply} className="reReplyForm">
              <div className="reReplyUser">
                <img src="" alt="" />
              </div>
              <div className="reReplyText">
                <input
                  value={this.state.text}
                  className="reReplyInput"
                  onChange={this.handleInput}
                  type=""
                ></input>
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
