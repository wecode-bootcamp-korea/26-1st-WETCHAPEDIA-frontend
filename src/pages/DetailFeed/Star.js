import React, { Component } from 'react';
import { ReactComponent as StarSvg } from './star.svg';

class Star extends Component {
  render() {
    const {
      fill,
      score,
      getStarScore,
      registerStarScore,
      deleteStarScore,
      bindStarScore,
      comment,
    } = this.props;
    return (
      <div>
        <StarSvg
          fill={fill}
          onMouseOver={() => {
            getStarScore(score);
          }}
          onClick={() => {
            registerStarScore(score, comment);
            deleteStarScore();
          }}
          onMouseOut={() => {
            bindStarScore();
          }}
        />
      </div>
    );
  }
}

export default Star;
