import React, { Component } from 'react';
import MovieHeader from './MovieHeader';
import MovieInfos from './MovieInfos';

class DetailFeed extends Component {
  constructor() {
    super();
    this.state = {
      infos: {},
      score: 0,
      commentContainer: [
        {
          divClassName: 'wantLook',
          src: '/images/plus.png',
          alt: 'plus',
          imgClassName: 'plus',
          text: '보고싶어요',
        },
        {
          divClassName: 'comment',
          src: '/images/pencil.png',
          alt: 'pencil',
          imgClassName: 'pencil',
          text: '코멘트',
        },
        {
          divClassName: 'lookingEye',
          src: '/images/looking.png',
          alt: 'looking',
          imgClassName: 'looking',
          text: '보는중',
        },
        {
          divClassName: 'dotMenu',
          src: '/images/dotmenu.png',
          alt: 'menu',
          imgClassName: 'dotmenu',
          text: '더보기',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('/data/movieData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          infos: data,
        });
      });
  }

  getStarScore = value => {
    this.setState({
      score: value,
    });
  };

  render() {
    const { infos, commentContainer, score } = this.state;
    return (
      <div className="detailFeedContainer">
        <img
          src="/images/background2.jpeg"
          className="movieBackground"
          alt="movieposter"
        />
        <MovieHeader
          infos={infos.movieBasicInfo}
          commentContainer={commentContainer}
          score={score}
          getStarScore={this.getStarScore}
        />
        <MovieInfos infos={infos} />
      </div>
    );
  }
}

export default DetailFeed;
