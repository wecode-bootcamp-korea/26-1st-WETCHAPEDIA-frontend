import React, { Component } from 'react';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import MovieList from './MovieList';

class FeedsDataMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsData: [],
      feedsType: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let { feedsDataInfo, type } = nextProps;
    return { feedsData: feedsDataInfo, feedsType: type };
  }

  render() {
    let { feedsData, feedsType } = this.state;

    return (
      <>
        {feedsData.map(({ category, movies }, index) => {
          return (
            <section key={index} className="feedsContainer">
              <div className="feedsCategoryNameContainer">
                <p className="feedsCategoryName">{category}</p>
              </div>
              <CarouselSlide>
                <MovieList type={feedsType} movieListData={movies} />
              </CarouselSlide>
            </section>
          );
        })}
      </>
    );
  }
}

export default FeedsDataMap;
