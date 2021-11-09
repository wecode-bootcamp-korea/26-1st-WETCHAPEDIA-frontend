import React, { Component } from 'react';
import Star from '../Star';
import './MovieHeader.scss';

class MovieHeader extends Component {
  render() {
    const {
      infos,
      getStarScore,
      displayScore,
      registerStarScore,
      bindStarScore,
      comment,
      wantLook,
      changeWantLookState,
      changeCommentModalState,
    } = this.props;

    const score =
      Math.round(
        (infos.rate
          .map(elem => +elem)
          .reduce(function add(sum, currValue) {
            return sum + currValue;
          }, 0) /
          infos.rate.length) *
          10
      ) / 10;
    const peopleNumber = infos.rate.length;

    const releasedDate = infos.release_date.slice(0, 4);

    return (
      <div className="movieHeader">
        {infos && (
          <>
            <div className="moviePosterContainer">
              <img
                src={infos.poster_url}
                alt="movieposter"
                className="moviePoster"
              />
            </div>
            <div className="basicInfo">
              <div className="titleInfo">
                <p className="title">{infos.title}</p>
                <span className="year">{releasedDate}</span>
                <span className="genre">{infos.genre}</span>
                <span className="country">{infos.country}</span>
              </div>
              <div className="contour" />
              <div className="averageScore">
                <span className="averageWord">평균</span>
                <img
                  src="/images/blackstar.png"
                  alt="blackstar"
                  className="blackstar"
                />
                <span className="score">{score}</span>
                <span className="peopleNumber">{peopleNumber}명</span>
              </div>
              <div className="contour" />
              <div className="movieReview">
                <div className="starScore">
                  <p className="scoreComent">{comment}</p>
                  <div className="starsContainer">
                    <Star
                      score={1}
                      fill={displayScore >= 1 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                      registerStarScore={registerStarScore}
                      bindStarScore={bindStarScore}
                      comment="싫어요"
                    />
                    <Star
                      score={2}
                      fill={displayScore >= 2 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                      registerStarScore={registerStarScore}
                      bindStarScore={bindStarScore}
                      comment="별로에요"
                    />
                    <Star
                      score={3}
                      fill={displayScore >= 3 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                      registerStarScore={registerStarScore}
                      bindStarScore={bindStarScore}
                      comment="보통이에요"
                    />
                    <Star
                      score={4}
                      fill={displayScore >= 4 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                      registerStarScore={registerStarScore}
                      bindStarScore={bindStarScore}
                      comment="재미있어요"
                    />
                    <Star
                      score={5}
                      fill={displayScore >= 5 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                      registerStarScore={registerStarScore}
                      bindStarScore={bindStarScore}
                      comment="최고에요!"
                    />
                  </div>
                </div>
                <div className="reviewContour" />
                <div className="commentContainer">
                  <div
                    className={wantLook ? 'wantLookOn' : 'wantLookOff'}
                    onClick={changeWantLookState}
                  >
                    <img
                      src={
                        wantLook ? '/images/bookmark.jpeg' : '/images/plus.png'
                      }
                      alt="plus"
                      className="plus"
                    />
                    <span>보고싶어요</span>
                  </div>
                  <div className="comment" onClick={changeCommentModalState}>
                    <img
                      src="/images/pencil.png"
                      alt="pencil"
                      className="pencil"
                    />
                    <span>코멘트</span>
                  </div>
                  <div className="lookingEye">
                    <img
                      src="/images/looking.png"
                      alt="looking"
                      className="looking"
                    />
                    <span>보는중</span>
                    <div className="dotMenu">
                      <img
                        src="/images/dotmenu.png"
                        alt="menu"
                        className="dotmenu"
                      />
                      <span>더보기</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MovieHeader;
