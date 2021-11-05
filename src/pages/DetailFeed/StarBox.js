import React, { Component } from 'react';
import { ReactComponent as Star } from './star.svg';

class StarBox extends Component {
  render() {
    const { fill, score, getStarScore } = this.props;
    return (
      <div>
        <Star
          fill={fill}
          onMouseOver={() => {
            getStarScore(score);
          }}
        />
      </div>
    );
  }
}

export default StarBox;
