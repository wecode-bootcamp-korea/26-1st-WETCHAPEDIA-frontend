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
      // 'http://10.58.5.94:8000/?source=박스오피스',
      // 'http://10.58.5.94:8000/?source=넷플릭스',
      // 'http://10.58.5.94:8000/?source=왓챠',
      '/data/feedDataBoxOffice.json',
      '/data/feedDataNetflix.json',
      '/data/feedDataWatcha.json',
    ];
  }

  fetchSoleFeedsData(path) {
    fetch(path)
      .then(res => res.json())
      .then(data => {
        let { message } = data;
        let { soleFeedsData } = this.state;
        this.setState({ soleFeedsData: soleFeedsData.concat(message) });
      });
  }

  componentDidMount() {
    this.fetchSoleFeedsPaths.forEach(path => this.fetchSoleFeedsData(path));

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

    let fetchCount = soleFeedsData.length;

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
