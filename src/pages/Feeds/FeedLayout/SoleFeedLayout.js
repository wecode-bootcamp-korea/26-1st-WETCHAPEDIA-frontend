import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './FeedLayout.scss';

class SoleFeedLayout extends Component {
  isCheckLabel(labels, type) {
    return labels.includes(type);
  }

  moveToDetailPage = id => {
    let { history } = this.props;

    history.push(`/movie/${id}`);
  };

  render() {
    let { ranking, movieTitle, movieTear, url, ratings, sources, params } =
      this.props;

    return (
      <li
        onClick={() => {
          this.moveToDetailPage(params);
        }}
        className="feed"
      >
        <div className="rankingBox">{ranking}</div>
        <div className="labelContainer">
          <div
            className={`${
              this.isCheckLabel(sources, '왓챠') && 'label watLabel'
            }`}
          />
          <div
            className={`${
              this.isCheckLabel(sources, '넷플릭스') && 'label netFlLabel'
            }`}
          />
        </div>
        <figure
          style={{
            backgroundImage: `url(${url})`,
          }}
          className="moviePoster"
        />
        <div className="movieInfo">
          <p className="title">{movieTitle}</p>
          <p className="subInfo">{movieTear}</p>
          <div className="ratingContainer">
            <p className="subInfo">평균</p>
            <div className="ratingStar" />
            <p className="subInfo">{ratings}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(SoleFeedLayout);
