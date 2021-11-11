import React, { Component } from 'react';
import './CommentIndividuals.scss';

class CommentIndividual extends Component {
  constructor() {
    super();
    this.state = {
      likeNumber: 0,
      isLikeNumberCounted: false,
    };
  }

  componentDidMount() {
    const { commentInfo } = this.props;
    this.setState({
      likeNumber: commentInfo.like_number,
    });
  }

  changeLikeNumber = () => {
    const { isLikeNumberCounted, likeNumber } = this.state;
    this.setState({
      likeNumber: !isLikeNumberCounted ? likeNumber + 1 : likeNumber - 1,
      isLikeNumberCounted: !isLikeNumberCounted,
    });
  };

  render() {
    const { commentInfo } = this.props;
    const { likeNumber, isLikeNumberCounted } = this.state;
    const userCommentText = commentInfo.comment.slice(0, 80);
    return (
      <div className="individual">
        <p className="userName">{commentInfo.user_name}</p>
        <div className="contour" />
        <div className="comment">
          <p>{userCommentText}</p>
        </div>
        <div className="contour" />
        <div className="like">
          <img src="/images/thumb.png" alt="thumb" className="commentThumb" />
          <span className="likeNumber">{likeNumber}</span>
        </div>
        <div className="contour" />
        <span
          className={isLikeNumberCounted ? 'countButtonOn' : 'countButtonOff'}
          onClick={this.changeLikeNumber}
        >
          좋아요
        </span>
      </div>
    );
  }
}

export default CommentIndividual;
