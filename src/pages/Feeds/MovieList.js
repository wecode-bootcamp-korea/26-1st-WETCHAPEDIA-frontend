import React, { Component } from 'react';
import SoleFeedLayout from './FeedLayout/SoleFeedLayout';
import CollectionFeedLayout from './FeedLayout/CollectionFeedLayout';

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
      return curMovieListData.map(
        (
          {
            id,
            title,
            poster_image_url,
            released_at,
            country,
            ratings,
            sources,
          },
          index
        ) => {
          return (
            <SoleFeedLayout
              key={index}
              ranking={index + 1}
              movieTitle={title}
              movieTear={`${released_at.slice(0, 4)} ・ ${country}`}
              url={poster_image_url}
              ratings={ratings}
              sources={sources}
              query={id}
            />
          );
        }
      );
    } else {
      return curMovieListData.map(({ id, concept, urls }) => {
        return <CollectionFeedLayout key={id} concept={concept} urls={urls} />;
      });
    }
  }
}

export default MovieList;
