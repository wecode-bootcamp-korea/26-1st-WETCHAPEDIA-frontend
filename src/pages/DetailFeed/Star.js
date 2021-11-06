import React, { Component } from 'react';
import { ReactComponent as StarSvg } from './star.svg';

class Star extends Component {
  render() {
    const { fill, score, getStarScore } = this.props;
    return (
      <div>
        <StarSvg
          fill={fill}
          onMouseOver={() => {
            getStarScore(score);
          }}
        />
      </div>
    );
  }
}

export default Star;
