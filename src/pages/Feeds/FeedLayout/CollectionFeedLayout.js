import React, { Component } from 'react';
import './FeedLayout.scss';

class CollectionFeedLayout extends Component {
  render() {
    let { concept, urls } = this.props;

    return (
      <li className="feed">
        <div className="wrapper collectionType">
          {urls.map((url, index) => {
            return (
              <figure
                key={index}
                style={{
                  backgroundImage: `url(${url})`,
                }}
                className="moviePosterQuarter"
              />
            );
          })}
        </div>
        <div className="movieInfo">
          <p className="title">{concept}</p>
        </div>
      </li>
    );
  }
}

export default CollectionFeedLayout;
