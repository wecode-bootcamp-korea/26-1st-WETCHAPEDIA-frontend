import React, { Component } from 'react';

class SoleFeedLayout extends Component {
  render() {
    let { movieTitle, movieTear, url } = this.props;

    return (
      <li className="feed">
        <figure
          style={{
            backgroundImage: `url(${url})`,
          }}
          className="moviePoster"
        />
        <div className="movieInfo">
          <p className="title">{movieTitle}</p>
          <p className="tear">{movieTear}</p>
        </div>
      </li>
    );
  }
}

export default SoleFeedLayout;
