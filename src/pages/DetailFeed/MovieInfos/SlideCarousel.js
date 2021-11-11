import React, { Component } from 'react';
import CarouselSlide from '../../Feeds/CarouselSlide/CarouselSlide';
import MovieList from '../../Feeds/MovieList';
import './SlideCarousel.scss';

class SlideCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
    };
  }

  componentDidMount() {
    fetch('/data/feedDataWatcha.json')
      .then(res => res.json())
      .then(data => {
        let { message } = data;
        this.setState({
          fetchData: message.movies,
        });
      });
  }

  render() {
    let { fetchData } = this.state;
    console.log(fetchData);

    return (
      <div className="SlideCarousel">
        <CarouselSlide>
          <MovieList type="movieListType" movieListData={fetchData} />
        </CarouselSlide>
      </div>
    );
  }
}

export default SlideCarousel;
