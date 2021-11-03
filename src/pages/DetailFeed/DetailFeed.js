import React, { Component } from 'react';
import MovieHeader from './MovieHeader';
import MovieInfos from './MovieInfos';
import './DetailFeed.scss';
import './MovieInfos.scss';
import './Profiles.scss';
import './CommentIndividuals.scss';

class DetailFeed extends Component {
  constructor() {
    super();
    this.state = {
      infos: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          infos: data,
        });
      });
  }

  render() {
    return (
      <div className="detailFeedContainer">
        <img
          src="/images/moviebackground.jpeg"
          className="movieBackground"
          alt="movieposter"
        />
        <MovieHeader infos={this.state.infos} />
        <MovieInfos infos={this.state.infos} />
      </div>
    );
  }
}

export default DetailFeed;
