import React, { Component } from 'react';

class CommentIndividuals extends Component {
  render() {
    return (
      <>
        {contents.map((info, index) => {
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

const contents = [
  {
    userName: '위코드 26기 전창민',
    comment:
      '영화가 정말 재미있네요 ㅋㅋㅋㅋㅋ 추천합니다 이런 영화 처음이에요정말 지루하군요!!!!!',
    likeNumber: 40,
  },
  {
    userName: '위코드 26기 권상현',
    comment: '추천합니다 이런 영화 처음이에요정말 지루하군요!!!!!',
    likeNumber: 4,
  },
];
