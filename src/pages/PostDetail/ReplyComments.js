import React, { Component } from "react";
import "./ReplyComments.scss";
import { BsHeart } from "react-icons/bs";

class ReplyComments extends Component {
  render() {
    const { userId, comment } = this.props;
    return (
      <div className="ReplyComments">
        <li className="Component">
          <div className="ReplyUser">
            <img
              className="UserPicture"
              src="/images/Communityimages/chair.jpg"
              alt="댓글 유저 프로필"
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
