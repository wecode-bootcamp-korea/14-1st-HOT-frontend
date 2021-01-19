import React, { Component } from 'react';
import ItemWrap from './ItemWrap.js';
import './FeedList.scss';
import { API_DY } from '../../../config';

class FeedList extends Component {
  constructor() {
    super();
    this.state = {
      PostData: [],
    };
  }

  componentDidMount() {
    fetch(`${API_DY}/posts`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          PostData: res.result,
        });
      });
  }

  render() {
    return (
      <main className='postContainer'>
        <div className='postWrap'>
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
    );
  }
}

export default FeedList;
