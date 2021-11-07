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
    this.fetchComplete = 3;
  }

  componentDidMount() {
    // fetch('/data/soleFeedsData.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ soleFeedsData: data });
    //   });
    fetch('/data/feedDataBoxOffice.json')
      .then(res => res.json())
      .then(data => {
        let { message } = data;
        let { soleFeedsData } = this.state;
        this.setState({ soleFeedsData: soleFeedsData.concat(message) });
      });
    fetch('/data/feedDataWatcha.json')
      .then(res => res.json())
      .then(data => {
        let { message } = data;
        let { soleFeedsData } = this.state;
        this.setState({ soleFeedsData: soleFeedsData.concat(message) });
      });
    fetch('/data/feedDataNetflix.json')
      .then(res => res.json())
      .then(data => {
        let { message } = data;
        let { soleFeedsData } = this.state;
        this.setState({ soleFeedsData: soleFeedsData.concat(message) });
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
    let fetchCnt = soleFeedsData.length;

    if (fetchCnt === this.fetchComplete) {
      return (
        <article className="feeds">
          {soleFeedsData.map(({ category, movies }, index) => {
            return (
              <section key={index} className="feedsContainer">
                <div className="feedsCategoryNameContainer">
                  <p className="feedsCategoryName">{category}</p>
                </div>
                <CarouselSlide>
                  <MovieList type="movieListType" movieListData={movies} />
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
    } else return null;
  }
}

export default Feeds;
