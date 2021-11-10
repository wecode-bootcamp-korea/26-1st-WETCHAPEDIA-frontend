import React, { Component } from 'react';
import './SearchFile.scss';
import PostCard from './PostCard';
import CategoryButton from './CategoryButton';

export default class ResearchPage extends Component {
  constructor() {
    super();
    this.state = {
      POSTER_DATA: {},
      query: '',
    };
  }

  getSearchData = () => {
    fetch(`http://10.58.4.226:8000/movies${this.props.location.search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          POSTER_DATA: data,
        });
      });
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.location.search !== this.props.location.search) {
      this.getSearchData();
    }
  }

  componentDidMount() {
    this.getSearchData();
  }

  render() {
    const { POSTER_DATA } = this.state;

    return (
      <div className="searchContainer">
        <div className="researchTitle">"해리"의 검색결과</div>
        <div className="contentContainer">
          <div className="textWrapper">
            <CategoryButton title="콘텐츠" />
            <CategoryButton title="인물" />
            <CategoryButton title="컬렉션" />
            <CategoryButton title="유저" />
          </div>
        </div>
        <div className="navigationContainer">
          <div className="slideBar">
            {POSTER_DATA.message &&
              POSTER_DATA.message.movies.map(poster => (
                <PostCard
                  key={poster.id}
                  img={poster.poster_image_url}
                  title={poster.title}
                  released={poster.released_at}
                  sourced={poster.sources}
                  rate={poster.ratings}
                  country={poster.country}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}
