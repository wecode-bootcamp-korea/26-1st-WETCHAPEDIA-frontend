import React, { Component } from 'react';
import './DetailFeed.scss';
import MovieHeader from './MovieHeader';
import MovieInfos from './MovieInfos';

class DetailFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detailFeedContainer">
        <img
          src="/images/moviebackground.jpeg"
          className="movieBackground"
          alt="movieposter"
        />
        <MovieHeader />
        <MovieInfos />
      </div>
    );
  }
}

export default DetailFeed;
