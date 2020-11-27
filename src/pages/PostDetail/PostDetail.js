import React, { Component } from 'react';
import Reply from './Reply.js';
import PinPoint from './PinPoint/PinPoint';
import { API_DY } from '../../config';
import './PostDetail.scss';
import { BsHeart } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';

class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
      replyList: [],
      data: [],
      mouseHover: false,
    };
  }

  componentDidMount() {
    fetch(`${API_DY}/posts/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((res) => {
        // console.log("results", res.results);
        this.setState({
          data: res.results,
          replyList: res.results.comments,
        });
      });
    // console.log(this.state.data);
  }

  commentInput = (e) => {
    this.setState({ reply: e.target.value });
  };

  pressForPost = (e) => {
    e.preventDefault();
    const { reply, replyList, data } = this.state;
    if (reply.length) {
      let replyToAdd = {
        id: 0,
        author: {
          author_id: data.author.author_id,
          username: data.author.username,
          profile_image: data.author.profile_image,
        },
        content: reply,
        created_at: '',
        updated_at: '',
        parent_id: null,
      };

      this.setState({
        replyList: [...replyList, replyToAdd],
        reply: '',
      });
    }

    fetch(`${API_DY}/posts/${this.props.match.params.id}/comments`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.zj5stc70m93-fyPZH4Pn7vKF9zvJb-5T5r-BKOiDGyU',
        // localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ content: this.state.reply }),
    })
      .then((res) => res.json())
      .then((res) => console.log('commentResponse', res));
  };
  handleMouseMove = () => {
    this.setState({ mouseHover: !this.state.mouseHover });
  };

  // this.setState({replyList : }
  render() {
    return (
      <section className='FeedDetail'>
        <div className='container'>
          <div className='feedLeft'>
            <div className='categoryName'>
              <div className='category'>30평대 | 내추럴 스타일 | 아파트</div>
              <div className='date'>이틀 전</div>
            </div>
            <article className='feedLetfArticle'>
              <div
                className='feedImageWrap'
                onMouseEnter={this.handleMouseMove}
                onMouseLeave={this.handleMouseMove}>
                {this.state.data.post_images && (
                  <div style={{ position: 'relative' }}>
                    <img
                      className='postMainImage'
                      src={this.state.data.post_images[0].image_url}
                      alt='MainImage'
                    />
                    {this.state.data.linked_products.map((el) => {
                      return (
                        <div
                          className={
                            this.state.mouseHover
                              ? 'circulerPlus'
                              : 'circleNone'
                          }
                          style={{
                            position: 'absolute',
                            left: `${el.left}px`,
                            top: `${el.top}px `,
                          }}>
                          <PinPoint
                            productId={el.product_id}
                            imageURL={el.image_url}
                            productName={el.product_name}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <p className='feedPostWrite'>{this.state.data.content}</p>
              <div className='feedHashTags'>
                <ul>
                  <li>
                    <a href='/'>
                      <span>{this.props.hashtags}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </article>

            <section className='feedReplyWrap'>
              <h1 className='feedReplyHeader'>
                댓글&nbsp;
                <span className='feedReplyHeaderCount'>
                  {this.state.replyList.length}
                </span>
              </h1>
              <form
                className='replyTypingForm'
                action=''
                onSubmit={this.pressForPost}>
                <div className='feedReplyProfile'>
                  <img
                    className='feedReplyUser'
                    src='/images/bannerSample.png'
                    alt='profileImage'
                  />
                </div>
                <div className='feedReplyInput'>
                  <input
                    className='replyInput'
                    value={this.state.reply}
                    type='text'
                    placeholder='칭찬과 격려의 댓글은 작성자에게 큰 힘이  됩니다 :)'
                    onChange={this.commentInput}
                  />
                  <button className='submit'>등록</button>
                </div>
              </form>
              <ul className='feedReplyList'>
                {this.state.replyList.length &&
                  this.state.replyList.map((el) => {
                    return (
                      <Reply
                        id={el.id}
                        replyList={this.state.replyList}
                        authorId={el.author.author_id}
                        comment={el.content}
                        params={this.props.match.params.id}
                        image={el.author.profile_image}
                        userName={el.author.username}
                        removeComment={this.handleRemoveComment}
                      />
                    );
                  })}
              </ul>
            </section>
          </div>
          <div className='feedRight'>
            <div className='rightSideBar'>
              <div className='feedLikes'>
                <button className='likeButton'>
                  <BsHeart className='detailLike' />
                </button>
                <button className='scrapButton'>
                  <BsBookmark className='detailBookmark' />
                </button>
              </div>
              <div className='feedUserProfile'>
                <div className='UserProfilePic'>
                  <a href='/'>
                    <img
                      src={this.state.data.author?.profile_image}
                      alt='proFile'
                    />
                  </a>
                </div>
                <div className='UserProfileWriter'>
                  <span>{this.state.data.author?.username}</span>
                  <button>팔로잉</button>
                </div>
              </div>
              <div className='pictureTable'>
                <a href='/'>
                  <div className='postListBox'>
                    <img src='/images/post1.png' className='post1' alt='' />
                  </div>
                </a>
                <a href='/'>
                  <div className='postListBox'>
                    <img src='/images/post2.png' className='post1' alt='' />
                  </div>
                </a>
                <a href='/'>
                  <div className='postListBox'>
                    <img src='/images/post3.png' className='post1' alt='' />
                  </div>
                </a>
                <a href='/'>
                  <div className='postListBox'>
                    <img src='/images/post4.png' className='post1' alt='' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default posts;
