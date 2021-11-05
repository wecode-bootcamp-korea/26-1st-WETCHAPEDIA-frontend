import React, { Component } from 'react';
import StarBox from './StarBox';
import './MovieHeader.scss';

class MovieHeader extends Component {
  render() {
    const { infos, commentContainer, getStarScore, score } = this.props;
    return (
      <div className="movieHeader">
        {infos && (
          <>
            <div className="moviePosterContainer">
              <img
                src={infos.posterUrl}
                alt="movieposter"
                className="moviePoster"
              />
            </div>
            <div className="basicInfo">
              <div className="titleInfo">
                <p className="title">{infos.title}</p>
                <span className="year">{infos.year} </span>
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
                <span className="score">{infos.score}</span>
                <span className="peopleNumber">{infos.peopleNumber}</span>
              </div>
              <div className="contour" />
              <div className="movieReview">
                <div className="starScore">
                  <p className="scoreComent">평가하기</p>
                  <div className="starsContainer">
                    <StarBox
                      score={1}
                      fill={score >= 1 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                    />
                    <StarBox
                      score={2}
                      fill={score >= 2 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                    />
                    <StarBox
                      score={3}
                      fill={score >= 3 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                    />
                    <StarBox
                      score={4}
                      fill={score >= 4 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                    />
                    <StarBox
                      score={5}
                      fill={score >= 5 ? 'yellow' : 'current'}
                      getStarScore={getStarScore}
                    />
                  </div>
                </div>
                <div className="reviewContour" />
                <div className="commentContainer">
                  {commentContainer.map((info, index) => {
                    return (
                      <div className={info.divClassName} key={index}>
                        <img
                          src={info.src}
                          alt={info.alt}
                          className={info.imgClassName}
                        />
                        <span>{info.text}</span>
                      </div>
                    );
                  })}
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
