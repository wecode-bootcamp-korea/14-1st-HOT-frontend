import React, { Component } from "react";
import "./ReReply.scss";
import { BsHeart } from "react-icons/bs";
class ReReply extends Component {
  render() {
    return (
      <div className="replyCommentComponentWrap">
        <li className="replyCommentComponent">
          <div className="replyCommentUser">
            <img
              className="replyCommentUserPicture"
              src="/images/Communityimages/chair.jpg"
              alt=""
            />
          </div>
          <div className="replyCommentUserId">{this.props.userId}</div>
          <div className="replyCommentComment">{this.props.comment}</div>
        </li>
      </div>
    );
  }
}

export default ReReply;
