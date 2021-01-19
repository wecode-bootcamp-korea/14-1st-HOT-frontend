import React, { Component } from 'react';
import ReplyComments from './ReplyComments';
import { BsHeart } from 'react-icons/bs';
import { API_DY } from '../../config';

class Reply extends Component {
  constructor() {
    super();
    this.state = {
      showlist: true,

      text: '',
      list: [],
    };
  }

  reReply = () => {
    this.setState({ showlist: !this.state.showlist });
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
        text: '',
      });
    }
  };

  handleRemoveComment = () => {
    this.props.removeComment(this.props.id);
    fetch(`${API_DY}/posts/${this.props.params}/comments/${this.props.id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.zj5stc70m93-fyPZH4Pn7vKF9zvJb-5T5r-BKOiDGyU",
          localStorage.getItem('token'),
      },
    }).then((res) => res.json());
    // if()
  };

  render() {
    const {
      authorId,
      image,
      userName,
      comment,
      replyList,
      id,
      params,
      removeComment,
    } = this.props;
    return (
      <div className='Reply'>
        <li className='ReplyList'>
          <article className='ReplyContent'>
            <p className='ReplyText'>
              <a className='ReplyUserName' href='/'>
                <img className='ReplyUserProfile' src={image} alt='' />
                <span className='ReplyUserId'>{userName}</span>
              </a>
              <div className='ReplyPostText'>{comment}</div>
            </p>
            <footer className='ReplyFooter'>
              <time className='ReplyFooterTime'>몇분전</time>
              <button className='ReplyLike'>
                <BsHeart className='likeHeartIcon' />
                좋아요
              </button>
              <button className='AddReReply' onClick={this.reReply}>
                답글달기
              </button>
              <button
                className='ReplyDelite'
                onClick={this.handleRemoveComment}>
                삭제
              </button>
            </footer>
          </article>
        </li>
        <div className={this.state.showlist ? 'hide' : 'show'}>
          <div className='reReplyWrap'>
            <ul className='reReplyList'>
              {this.state.list.map((text, idx) => {
                return (
                  <ReplyComments
                    key={idx}
                    id={authorId}
                    comment={text}
                    userId={userName}
                    userImage={image}
                  />
                );
              })}
            </ul>
            <form onSubmit={this.addReReply} className='reReplyForm'>
              <div className='reReplyUser'>
                <img src='/images/Communityimages/chair.jpg' alt='' />
              </div>
              <div className='reReplyText'>
                <input
                  value={this.state.text}
                  className='reReplyInput'
                  onChange={this.handleInput}
                  type='text'
                />
                <button className='reReplyButton'>등록</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reply;
