import React, { Component } from "react";
import Reply from "./Reply.js";

import PinPoint from "./PinPoint/PinPoint";
import "./PostDetail.scss";

class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      replyList: [],
      data: [],
      mouseHover: false,
    };
  }

  componentDidMount() {
    // fetch(`http://10.58.1.148:8000/posts/${this.props.match.params.id}`)
    fetch("/Data/POSTDATA.json")
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          data: res.results,
        });
      });
  }

  commentInput = (e) => {
    this.setState({ reply: e.target.value });
  };

  pressForPost = (e) => {
    e.preventDefault();
    const { reply, replyList } = this.state;
    if (reply.length) {
      let replyToAdd = {
        id: 0,
        author: {
          author_id: this.state.data.author.author_id,
          username: this.state.data.author.author_username,
          profile_image: null,
        },
        content: reply,
        created_at: "",
        updated_at: "",
        parent_id: null,
      };

      this.setState(
        {
          replyList: [...replyList, replyToAdd],
          reply: "",
        },
        () => console.log("List", this.state.reply)
      );
    }
  };
  handleMouseMove = () => {
    this.setState({ mouseHover: !this.state.mouseHover });
  };

  render() {
    console.log(this.pressForPost);
    return (
      <section className="FeedDetail">
        <div className="container">
          <div className="feedLeft">
            <article className="feedLetfArticle">
              <div
                className="feedImageWrap"
                onMouseEnter={this.handleMouseMove}
                onMouseLeave={this.handleMouseMove}
              >
                {this.state.data.post_images && (
                  <div style={{ position: "relative" }}>
                    <img
                      className="postMainImage"
                      src={this.state.data.post_images[0].image_url}
                      alt="MainImage"
                    />
                    {this.state.data.linked_products.map((el) => {
                      return (
                        <div
                          className={
                            this.state.mouseHover
                              ? "circulerPlus"
                              : "circleNone"
                          }
                          style={{
                            position: "absolute",
                            left: `${el.left}px`,
                            top: `${el.top}px `,
                          }}
                        >
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

              <p className="feedPostWrite">{this.state.data.content}</p>
              <div className="feedHashTags">
                <ul>
                  {/* map 들어갈 자리  해쉬태그 클릭시 해당 상품 구매 페이지로 넘어가야하기 때문에 링크로 만들었음 */}
                  <li>
                    <a href="/">
                      <span>{this.props.hashtags}</span>
                      <span>#{this.state.data.tags?.[0]}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </article>
            {/* 댓글창  */}
            <section className="feedReplyWrap">
              <h1 className="feedReplyHeader">
                댓글&nbsp;<span className="feedReplyHeaderCount"></span>
              </h1>
              <form
                className="replyTypingForm"
                action=""
                onSubmit={this.pressForPost}
              >
                <div className="feedReplyProfile">
                  <img
                    className="feedReplyUser"
                    src="/images/bannerSample.png"
                    alt="profileImage"
                  />
                </div>
                <div className="feedReplyInput">
                  <input
                    className="replyInput"
                    value={this.state.reply}
                    type="text"
                    placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이  됩니다 :)"
                    onChange={this.commentInput}
                  />
                  <button className="submit">등록</button>
                </div>
              </form>
              <ul className="feedReplyList">
                {this.state.data.comments?.length &&
                  this.state.data.comments.map((el, idx) => {
                    return (
                      <Reply
                        key={idx}
                        id={el.author_id}
                        comment={el.content}
                        image={el.author.profile_image}
                        username={el.author.username}
                      />
                    );
                  })}
              </ul>
            </section>
          </div>
          <div className="feedRight">
            <div className="rightSideBar">
              <div className="feedLikes">
                <button className="likeButton">하트</button>
                <button className="scrapButton">스크랩</button>
              </div>
              <div className="feedUserProfile">
                <div className="UserProfilePic">
                  <a href="/">
                    <img
                      src={this.state.data.author?.profile_image}
                      alt="proFile"
                    />
                  </a>
                </div>
                <div className="UserProfileWriter">
                  <span>{this.state.data.author?.username}</span>
                  <button>팔로잉</button>
                </div>
              </div>
              <div className="pictureTable">
                {/* 네모난모양으로 만들어야하는데 방법을 모르겠음.. */}
                <ul>
                  <li>
                    <a href="/">
                      <img src="" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default posts;
