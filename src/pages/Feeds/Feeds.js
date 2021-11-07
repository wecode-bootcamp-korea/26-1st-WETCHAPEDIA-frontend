import React, { Component } from 'react';
import CarouselSlide from './CarouselSlide';
import MovieList from './MovieList';
import './Feeds.scss';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soleFeedsData: [],
      collectionFeedsData: [],
    };
  }

  componentDidMount() {
    fetch('/data/soleFeedsData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ soleFeedsData: data });
      });
    fetch('/data/collectionFeedsData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          collectionFeedsData: data,
        });
      });
  }

  render() {
    let { soleFeedsData, collectionFeedsData } = this.state;

    return (
      <article className="feeds">
        {soleFeedsData.map(({ category, movieList }, index) => {
          return (
            <section key={index} className="feedsContainer">
              <div className="feedsCategoryNameContainer">
                <p className="feedsCategoryName">{category}</p>
              </div>
              <CarouselSlide>
                <MovieList type="movieListType" movieListData={movieList} />
              </CarouselSlide>
            </section>
          );
        })}
        {collectionFeedsData.map(({ category, movieList }, index) => {
          return (
            <section key={index} className="feedsContainer">
              <div className="feedsCategoryNameContainer">
                <p className="feedsCategoryName">{category}</p>
              </div>
              <CarouselSlide>
                <MovieList
                  type="movieCollectionType"
                  movieListData={movieList}
                />
              </CarouselSlide>
            </section>
          );
        })}
      </article>
    );
  }
}

export default Feeds;
