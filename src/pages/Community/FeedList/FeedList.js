import React, { Component } from "react";
import ItemWrap from "./ItemWrap.js";
import "./FeedList.scss";

// const API = "http://10.58.7.154:8000/post";

class FeedList extends Component {
  constructor() {
    super();
    this.state = {
      PostData: [],
    };
  }

  componentDidMount() {
    fetch("http://10.58.6.6:8000/posts")
      .then((response) => response.json())
      .then((res) => {
        this.setState(
          {
            PostData: res.result,
          },
          () => console.log("List", this.state.PostData)
        );
      });
  }

  render() {
    return (
      <>
        <div className="nav"></div>
        <main className="postContainer">
          <div className="postWrap">
            {this.state.PostData &&
              this.state.PostData.map((el, idx) => {
                return (
                  <ItemWrap
                    key={idx}
                    id={el.post_id}
                    userName={el.post_author_username}
                    userImage={el.post_author_profile}
                    postImage={el.post_mainimage_url}
                    countLikes={el.post_likes_count}
                    countBookmarks={el.post_bookmarks_count}
                    postWrite={el.post_content}
                    countComments={el.post_comments_count}
                    comment={el.comment}
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
