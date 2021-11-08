import React, { Component } from 'react';
import './CommentIndividuals.scss';

class CommentIndividual extends Component {
  render() {
    const { commentInfo } = this.props;
    const userComment = commentInfo.comment.slice(0, 80);
    return (
      <div className="individual">
        <p className="userName">{commentInfo.user_name}</p>
        <div className="contour" />
        <div className="comment">
          <p>{userComment}</p>
        </div>
        <div className="contour" />
        <div className="like">
          <img src="/images/thumb.png" alt="thumb" className="commentThumb" />
          <span className="likeNumber">{commentInfo.like_number}</span>
        </div>
        <div className="contour" />
        <div className="likeCountButton">좋아요</div>
      </div>
    );
  }
}

export default CommentIndividual;
