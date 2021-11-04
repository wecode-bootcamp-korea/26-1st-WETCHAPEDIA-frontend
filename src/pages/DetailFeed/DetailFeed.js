import React, { Component } from 'react';
import MovieHeader from './MovieHeader';
import MovieInfos from './MovieInfos';
import './MovieHeader.scss';
import './MovieInfos.scss';
import './Profiles.scss';
import './CommentIndividuals.scss';

class DetailFeed extends Component {
  constructor() {
    super();
    this.state = {
      infos: {},
      starsUrl: [
        '/images/emptystar.png',
        '/images/emptystar.png',
        '/images/emptystar.png',
        '/images/emptystar.png',
        '/images/emptystar.png',
      ],
      scoreComment: '평가하기',
      scoreRegister: false,
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

  changeStars = e => {
    if (e.pageX < 429) {
      this.setState({
        starsUrl: [
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 429 && e.pageX < 443) {
      // console.log('pageX is 419<=pageX<433');
      this.setState({
        starsUrl: [
          '/images/starhalf.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 443 && e.pageX < 459) {
      // console.log('pageX is 433<pageX<449');
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 459 && e.pageX < 467) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/starhalf.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 477 && e.pageX < 494) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 494 && e.pageX < 511) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/starhalf.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 511 && e.pageX < 529) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 529 && e.pageX < 547) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/starhalf.png',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 547 && e.pageX < 565) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/emptystar.png',
        ],
      });
    } else if (e.pageX >= 565 && e.pageX < 582) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/starhalf.png',
        ],
      });
    } else if (e.pageX >= 582 && e.pageX < 599) {
      this.setState({
        starsUrl: [
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
          '/images/star.jpeg',
        ],
      });
    } else if (e.pageX >= 599) {
      this.setState({
        starsUrl: [
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
          '/images/emptystar.png',
        ],
      });
    }
  };

  render() {
    const { infos, starsUrl, scoreComment } = this.state;
    return (
      <div className="detailFeedContainer">
        <img
          src="/images/moviebackground.jpeg"
          className="movieBackground"
          alt="movieposter"
        />
        <MovieHeader
          infos={infos.movieBasicInfo}
          starsUrl={starsUrl}
          scoreComment={scoreComment}
          changeStars={this.changeStars}
        />
        <MovieInfos infos={infos} />
      </div>
    );
  }
}

export default DetailFeed;
