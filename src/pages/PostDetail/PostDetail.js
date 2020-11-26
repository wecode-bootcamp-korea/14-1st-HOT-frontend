import React, { Component } from "react";
import Reply from "./Reply.js";
import Furniture from "./Furniture";
import "./PostDetail.scss";

const API = "http://10.58.0.153:8000/post/1";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: "",
      replyList: [],
      furniture: [
        {
          link: "https://www.naver.com",
          image:
            "https://images.unsplash.com/photo-1583335513577-225dc0dee59e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
      ],
      data: {},
    };
  }

  componentDidMount() {
    fetch(API, {})
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result,
          replyList: result.results.comments,
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
          author_id: 0,
          username: "seung_yun",
          profile_image: null,
        },
        content: reply,
        created_at: "",
        updated_at: "",
        parent_id: null,
      };

      this.setState({
        replyList: [...replyList, replyToAdd],
        reply: "",
      });
    }
  };

  render() {
    return (
      <section className="FeedDetail">
        <div className="container">
          <div className="feedLeft">
            <article className="feedLetfArticle">
              <header className="feedHeader">
                <div className="headerLeft">
                  20평대&nbsp;&nbsp;|&nbsp;&nbsp;내추럴
                  스타일&nbsp;&nbsp;|&nbsp;&nbsp;아파트
                </div>
                <div>어제</div>
              </header>
              <div className="feedImageWrap">
                {this.state.data.length !== 0 && (
                  <img
                    className="sofa"
                    src={this.state.data.results?.post_images[0].image_url}
                    alt="MainImage"
                  />
                )}
              </div>

              <div className="furnitureWrap">
                <ul className="furnitureList">
                  {this.state.furniture.map((furniture, idx) => {
                    return (
                      <Furniture
                        key={idx}
                        link={furniture.link}
                        image={furniture.image}
                      />
                    );
                  })}
                </ul>
              </div>
              <p className="feedPostWrite">2020년이라면 이렇게 살아야져 🏠💕</p>
              <div className="feedHashTags">
                <ul>
                  {/* map 들어갈 자리  해쉬태그 클릭시 해당 상품 구매 페이지로 넘어가야하기 때문에 링크로 만들었음 */}
                  <li>
                    <span>{this.props.hashtags}</span>
                    <span className="hashtag"># 위코드</span>
                  </li>
                </ul>
              </div>
              <div className="views">
                <span className="countViews">조회수 1 회</span>
                <span className="countReply">댓글 1 개</span>
                <span className="countShare">공유 1 회</span>
                <button className="report">신고</button>
              </div>
            </article>
            {/* 댓글창  */}
            <section className="feedReplyWrap">
              <h1 className="feedReplyHeader">
                댓글&nbsp;<span className="feedReplyHeaderCount">1</span>
              </h1>
              <form
                className="replyTypingForm"
                action=""
                onSubmit={this.pressForPost}
              >
                <div className="feedReplyProfile">
                  <img
                    className="feedReplyUser"
                    src="/images/Communityimages/chair.jpg"
                    alt=""
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
                {this.state.replyList.length !== 0 &&
                  this.state.replyList.map((reply, idx) => {
                    return (
                      <Reply
                        // user={}
                        id={reply.id}
                        comment={reply.content}
                        image={reply.author.profile_image}
                        username={reply.author.username}
                      />
                    );
                  })}
              </ul>
              {/* <ul className="feedReplyPaginator"></ul> */}
            </section>
          </div>
          <div className="feedRight">
            <div className="rightSideBar">
              <div className="feedLikes">
                <button className="likeButton">
                  <img src="./images/heart.png" alt="heart" />
                </button>
                <button className="scrapButton">스크랩</button>
              </div>
              <div className="feedUserProfile">
                <div className="UserProfilePic">
                  <a href="/">
                    <img src="/images/Communityimages/chair.jpg" alt="chair" />
                  </a>
                </div>
                <div className="UserProfileWriter">
                  <span></span>
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

export default PostDetail;
