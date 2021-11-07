import React, { Component } from 'react';
import SoleFeedLayout from './SoleFeedLayout';
import CollectionFeedLayout from './CollectionFeedLayout';

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
    if (!type) return null;
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
          <SoleFeedLayout
            key={id}
            movieTitle={movieTitle}
            movieTear={movieTear}
            url={url}
          />
        );
      });
    } else {
      return curMovieListData.map(({ id, concept, urls }) => {
        return <CollectionFeedLayout key={id} concept={concept} urls={urls} />;
      });
    }
  }
}

export default MovieList;
