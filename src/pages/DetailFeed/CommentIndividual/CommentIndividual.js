import React, { Component } from 'react';
import './CommentIndividuals.scss';

class CommentIndividual extends Component {
  render() {
    const { commentInfo } = this.props;
    return (
      <div className="individual">
        <p className="userName">{commentInfo.userName}</p>
        <div className="contour" />
        <div className="comment">
          <p>{commentInfo.comment}</p>
        </div>
        <div className="contour" />
        <div className="like">
          <img src="/images/thumb.png" alt="thumb" className="commentThumb" />
          <span className="likeNumber">{commentInfo.likeNumber}</span>
        </div>
        <div className="contour" />
        <div className="likeCountButton">좋아요</div>
      </div>
    );
  }
}

export default CommentIndividual;
