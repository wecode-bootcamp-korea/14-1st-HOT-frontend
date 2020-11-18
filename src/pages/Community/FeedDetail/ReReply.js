import React, { Component } from "react";
import "./ReReply.scss";
class ReReply extends Component {
  render() {
    return (
      <li className="ReReplyComponent">
        <div className="ReReplyUser">
          <img className="ReReplyUserPicture" src="/chair.jpg" alt="" />
        </div>
        <div className="ReReplyUserId">userId</div>
        <div className="ReReplyComment">{this.props.comment}</div>
      </li>
    );
  }
}

export default ReReply;
