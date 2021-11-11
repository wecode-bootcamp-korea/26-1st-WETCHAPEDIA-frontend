import React, { Component } from 'react';
import FeedsDataMap from './FeedsDataMap';
import './Feeds.scss';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soleFeedsData: [],
      collectionFeedsData: [],
    };
    this.fetchComplete = 3;
    this.fetchSoleFeedsPaths = [
      // 'http://10.58.1.22:8000/movies?source=박스오피스',
      // 'http://10.58.1.22:8000/movies?source=넷플릭스',
      // 'http://10.58.1.22:8000/movies?source=왓챠',
      '/data/feedDataBoxOffice.json',
      '/data/feedDataNetflix.json',
      '/data/feedDataWatcha.json',
    ];
    this.fetchSoleFeedsAddPaths = [
      '/data/feedDataWatcha.json',
      '/data/feedDataWatcha.json',
      '/data/feedDataWatcha.json',
      '/data/feedDataWatcha.json',
      '/data/feedDataWatcha.json',
      '/data/feedDataWatcha.json',
      // 'http://10.58.1.22:8000/movies?rating=평균별점',
      // 'http://10.58.1.22:8000/movies?rating=평균별점',
      // 'http://10.58.1.22:8000/movies?rating=평균별점',
      // 'http://10.58.1.22:8000/movies?rating=평균별점',
      // 'http://10.58.1.22:8000/movies?rating=평균별점',
    ];
  }

  checkFetchAddData = event => {
    console.log(event.target.className);
    if (
      event.target.className === 'feedsCarousel' ||
      event.target.className === 'commentContainer' ||
      event.target.className === 'profileContainer'
    )
      return;
    let { scrollTop, scrollHeight, clientHeight } =
      event.target.scrollingElement;

    let targetScrollPos = scrollHeight - parseInt(scrollTop);

    if (targetScrollPos === clientHeight)
      this.sequenceFetchPath(this.fetchSoleFeedsAddPaths);
  };

  fetchSoleFeedsData(path) {
    fetch(path)
      .then(res => res.json())
      .then(data => {
        let { message } = data;
        let { soleFeedsData } = this.state;
        this.setState({ soleFeedsData: soleFeedsData.concat(message) });
      });
  }

  sequenceFetchPath = paths => {
    paths.forEach(path => this.fetchSoleFeedsData(path));
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkFetchAddData, true);
    this.sequenceFetchPath(this.fetchSoleFeedsPaths);

    fetch('/data/collectionFeedsData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          collectionFeedsData: data,
        });
      });
  }

  addSoleFeedsData = () => {
    this.sequenceFetchPath(this.fetchSoleFeedsAddPaths);
  };

  render() {
    let { soleFeedsData, collectionFeedsData } = this.state;
    let fetchCount = this.fetchSoleFeedsPaths.length;

    if (fetchCount === this.fetchComplete) {
      return (
        <article className="feeds">
          <FeedsDataMap type="movieListType" feedsDataInfo={soleFeedsData} />
          <FeedsDataMap
            type="movieCollectionType"
            feedsDataInfo={collectionFeedsData}
          />
        </article>
      );
    } else return null;
  }
}

export default Feeds;
