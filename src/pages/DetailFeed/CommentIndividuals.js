import React, { Component } from 'react';

class CommentIndividuals extends Component {
  render() {
    const { commentInfos } = this.props;
    return (
      <>
        {commentInfos.contents &&
          commentInfos.contents.map((info, index) => {
            return (
              <div className="commentIndividual" key={index}>
                <p className="userName">{info.userName}</p>
                <div className="commentContour" />
                <div className="userComment">
                  <p>{info.comment}</p>
                </div>
                <div className="commentContour" />
                <div className="commentLike">
                  <img
                    src="/images/thumb.png"
                    alt="thumb"
                    className="commentThumb"
                  />
                  <span className="likeNumber">{info.likeNumber}</span>
                </div>
                <div className="commentContour" />
                <div className="likeCountButton">좋아요</div>
              </div>
            );
          })}
      </>
    );
  }
}

export default CommentIndividuals;
