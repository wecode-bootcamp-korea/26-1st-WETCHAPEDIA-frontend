import React, { Component } from 'react';
import './MovieCommentModal.scss';

class MovieCommentInput extends Component {
  render() {
    const {
      isModalOpen,
      changeCommentBoxSwitch,
      updateUserComment,
      updateCommentTexts,
      commentTexts,
    } = this.props;
    return (
      <div className={isModalOpen ? 'commentBox' : 'commentBoxoff'}>
        <div className="header">
          <span className="deleteButton" onClick={changeCommentBoxSwitch}>
            x
          </span>
          <span className="title">영화제목</span>
          <span className="updateButton" onClick={updateUserComment}>
            코멘트작성
          </span>
        </div>
        <div className="contour" />
        <div className="sns">
          <span className="text">SNS</span>
          <img src="/images/facebook.png" alt="facebook" className="facebook" />
        </div>
        <div className="contour" />
        <textarea
          rows="20"
          cols="63"
          onChange={updateCommentTexts}
          name="commentTexts"
          placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요!"
          value={commentTexts}
        />
      </div>
    );
  }
}

export default MovieCommentInput;
