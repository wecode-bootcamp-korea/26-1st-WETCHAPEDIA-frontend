import React, { Component } from 'react';

class CollectionFeedLayout extends Component {
  render() {
    let { concept, urls } = this.props;

    return (
      <li className="feed">
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
  }
}

export default CollectionFeedLayout;
