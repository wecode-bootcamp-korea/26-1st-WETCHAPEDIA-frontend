import React, { Component } from 'react';
import './CommentIndividuals.scss';

class CommentIndividual extends Component {
  constructor() {
    super();
    this.state = {
      likeNumber: 0,
      isLikeNumberCount: false,
    };
  }

  componentDidMount() {
    const { commentInfo } = this.props;
    this.setState({
      likeNumber: commentInfo.like_number,
    });
  }

  changeLikeNumber = () => {
    const { isLikeNumberCount, likeNumber } = this.state;
    if (!isLikeNumberCount) {
      this.setState({
        likeNumber: likeNumber + 1,
        isLikeNumberCount: !isLikeNumberCount,
      });
    } else {
      this.setState({
        likeNumber: likeNumber - 1,
        isLikeNumberCount: !isLikeNumberCount,
      });
    }
  };

  render() {
    const { commentInfo } = this.props;
    const { likeNumber, isLikeNumberCount } = this.state;
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
          <span className="likeNumber">{likeNumber}</span>
        </div>
        <div className="contour" />
        <span
          className={isLikeNumberCount ? 'countButtonOn' : 'countButtonOff'}
          onClick={this.changeLikeNumber}
        >
          좋아요
        </span>
      </div>
    );
  }
}

export default CommentIndividual;
