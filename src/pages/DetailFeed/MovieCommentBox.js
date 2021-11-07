import React, { Component } from 'react';
import './MovieCommentBox.scss';

class MovieCommentBox extends Component {
  render() {
    const { boxSwitch, changeCommentBoxSwitch } = this.props;
    return (
      <div className={boxSwitch ? 'commentBox' : 'commentBoxoff'}>
        <div className="header">
          <span className="deleteButton" onClick={changeCommentBoxSwitch}>
            x
          </span>
          <span className="title">영화제목</span>
          <span className="commentButton">코멘트작성</span>
        </div>
        <div className="contour" />
        <div className="sns">
          <span className="snsText">SNS</span>
          <img src="/images/facebook.png" alt="facebook" className="facebook" />
        </div>
        <div className="contour" />
        <textarea rows="20" cols="68" />
      </div>
    );
  }
}

export default MovieCommentBox;
