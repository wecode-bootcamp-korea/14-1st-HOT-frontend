import React, { Component } from "react";
import result from "./POSTDATA";
import ItemWrap from "./ItemWrap.js";
import "./FeedList.scss";

// const API = "http://10.58.7.154:8000/post";

class FeedList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: result,
    });
  }

  // componentDidMount() {
  //   fetch("http://10.58.7.154:8000/post", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({ data: result.result });
  //       console.log(this.state.data);
  //     });
  // }

  // goToWriterProfile = () => {
  //   // console.log("click", "클릭됨"); //프로필로 가는 로직
  // };

  // goToDetail = () => {
  //   // console.log("찍히니?"); //디테일로 가는 로직
  // };

  // countLikes = () => {
  //   // console.log("좋아요");
  // };

  // countBookmarks = () => {
  //   // console.log("스크랩");
  // };

  // goToComment = () => {
  //   // console.log("이동!!");
  // };

  render() {
    console.log("이게 맞나", this.state.data);
    return (
      <>
        <div className="nav"></div>
        <main className="postContainer">
          <div className="postWrap">
            {this.state.data.map((el) => {
              return (
                <ItemWrap
                  userName={el.post_author_username}
                  userImage={el.post_author_profile}
                  postImage={el.post_author_profile}
                  countlikes={el.post_likes}
                  countbookmarks={el.post_bookmarks}
                  postwrite={el.post_comments}
                  postcontent={el.post_content}
                  // countcomments={{el.post_comments}
                />
              );
            })}
          </div>
        </main>
      </>
    );
  }
}

export default FeedList;
