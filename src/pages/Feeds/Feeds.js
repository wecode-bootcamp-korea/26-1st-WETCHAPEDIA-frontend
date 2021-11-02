import React, { Component } from 'react';
import './Feeds.scss';

function getTarget(elem, className) {
  while (!elem.classList.contains(className)) {
    elem = elem.parentNode;

    if (elem.nodeName === 'BODY') {
      elem = null;
      return;
    }
  }
  return elem;
}

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveX: 0,
    };
  }

  moveToX = event => {
    let { moveX } = this.state;
    let { name } = getTarget(event.target, 'carouselControl');

    name === 'right'
      ? this.setState({ moveX: moveX - 50 })
      : this.setState({ moveX: moveX + 50 });
  };

  render() {
    let { moveX } = this.state;

    return (
      <article className="feeds">
        <section className="feedsContainer">
          <div className="feedsCategoryContainer">
            <p className="feedsCategory">박스오피스 순위</p>
          </div>
          <div className="feedsCarousel">
            <ul
              className="carouselSlider"
              style={{ transform: `translate3D(${moveX}%, 0, 0)` }}
            >
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">베놈</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">베놈</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">베놈</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">베놈</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">베놈</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
            </ul>
          </div>
          <button
            onClick={this.moveToX}
            name="right"
            className="carouselControl nextBtn"
          >
            <div className="btnImg" />
          </button>
        </section>
        <section className="feedsContainer">
          <div className="feedsCategoryContainer">
            <p className="feedsCategory">왓차 영화 순위</p>
          </div>
          <div className="feedsCarousel">
            <ul className="carouselSlider">
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">이터널스</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
              <li className="feed">
                <figure className="moviePoster" />
                <div className="movieInfo">
                  <p className="movieTitle">베놈</p>
                  <p className="movieTear">2021 ・ 미국</p>
                </div>
              </li>
            </ul>
          </div>
          <button
            onClick={this.moveToX}
            name="right"
            className="carouselControl nextBtn"
          >
            <div className="btnImg" />
          </button>
        </section>
      </article>
    );
  }
}

export default Feeds;
