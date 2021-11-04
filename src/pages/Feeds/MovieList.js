import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curFeedsType: '',
      curMovieListData: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { type, movieListData } = nextProps;
    let { curFeedsType } = prevState;
    if (!nextProps.type) return null;
    if (type !== curFeedsType)
      return { curFeedsType: type, curMovieListData: movieListData };
  }

  isFeedsType(type) {
    if (type === 'movieListType') return true;
    else return false;
  }

  render() {
    let { curFeedsType, curMovieListData } = this.state;

    if (this.isFeedsType(curFeedsType)) {
      return curMovieListData.map(({ id, movieTitle, movieTear, url }) => {
        return (
          <li key={id} className="feed">
            <figure
              style={{
                backgroundImage: `url(${url})`,
              }}
              className="moviePoster"
            />
            <div className="movieInfo">
              <p className="title">{movieTitle}</p>
              <p className="tear">{movieTear}</p>
            </div>
          </li>
        );
      });
    } else {
      return curMovieListData.map(({ id, concept, urls }) => {
        return (
          <li key={id} className="feed">
            <div className="wrapper collectionType">
              <figure
                style={{
                  backgroundImage: `url(${urls[0]})`,
                }}
                className="moviePosterQuarter"
              />
              <figure
                style={{
                  backgroundImage: `url(${urls[1]})`,
                }}
                className="moviePosterQuarter"
              />
              <figure
                style={{
                  backgroundImage: `url(${urls[2]})`,
                }}
                className="moviePosterQuarter"
              />
              <figure
                style={{
                  backgroundImage: `url(${urls[3]})`,
                }}
                className="moviePosterQuarter"
              />
            </div>
            <div className="movieInfo">
              <p className="title">{concept}</p>
            </div>
          </li>
        );
      });
    }
  }
}

export default MovieList;
