import React, { Component } from 'react';
import { ReactComponent as StarSvg } from './star.svg';

class Star extends Component {
  render() {
    const {
      fill,
      score,
      getStarScore,
      registerStarScore,
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
