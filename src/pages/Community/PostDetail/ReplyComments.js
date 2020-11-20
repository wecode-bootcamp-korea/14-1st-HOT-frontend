import React, { Component } from "react";
import "./ReplyComments.scss";
import { BsHeart } from "react-icons/bs";

class ReplyComments extends Component {
  render() {
    const { userId, comment } = this.props;
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
          <div className="replyCommentUserId">{userId}</div>
          <div className="replyCommentComment">{comment}</div>
        </li>
      </div>
    );
  }
}

export default ReplyComments;
