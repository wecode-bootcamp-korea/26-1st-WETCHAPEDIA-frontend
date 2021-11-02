import React, { Component } from 'react';
import './Feeds.scss';

class Feeds extends Component {
  render() {
    return (
      <div className="feeds">
        <div className="feedList">
          <div className="categoryContainer">
            <p className="categoryName">박스오피스 순위</p>
          </div>
          <div className="feedShow">
            <div className="feedSlide">
              <div className="feedContainer">
                <div className="feed">
                  <figure className="moviePoster" />
                  <div className="movieInfo">
                    <p className="movieTitle">이터널스</p>
                    <p className="movieTear">2021 ・ 미국</p>
                  </div>
                </div>
                <div className="feed">
                  <figure className="moviePoster" />
                  <div className="movieInfo">
                    <p className="movieTitle">이터널스</p>
                    <p className="movieTear">2021 ・ 미국</p>
                  </div>
                </div>
                <div className="feed">
                  <figure className="moviePoster" />
                  <div className="movieInfo">
                    <p className="movieTitle">이터널스</p>
                    <p className="movieTear">2021 ・ 미국</p>
                  </div>
                </div>
                <div className="feed">
                  <figure className="moviePoster" />
                  <div className="movieInfo">
                    <p className="movieTitle">이터널스</p>
                    <p className="movieTear">2021 ・ 미국</p>
                  </div>
                </div>
                <div className="feed">
                  <figure className="moviePoster" />
                  <div className="movieInfo">
                    <p className="movieTitle">이터널스</p>
                    <p className="movieTear">2021 ・ 미국</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
