import React, { Component } from 'react';

class MovieHeader extends Component {
  render() {
    const { infos } = this.props;
    const MovieHeader = infos.map((info, index) => {
      return (
        <div className="movieHeader" key={index}>
          <div className="moviePosterContainer">
            <img
              src="/images/movieposter.jpeg"
              alt="movieposter"
              className="moviePoster"
            />
          </div>
          <div className="basicInfo">
            <div className="titleInfo">
              <p className="title">{info.movieBasicInfo.title}</p>
              <span className="year">{info.movieBasicInfo.year} </span>
              <span className="genre">{info.movieBasicInfo.genre}</span>
              <span className="country">{info.movieBasicInfo.country}</span>
            </div>
            <div className="contour" />
            <div className="averageScore">
              <span className="averageWord">평균</span>
              <img
                src="/images/blackstar.png"
                alt="blackstar"
                className="blackstar"
              />
              <span className="score">{info.movieBasicInfo.score}</span>
              <span className="peopleNumber">
                {info.movieBasicInfo.peopleNumber}
              </span>
            </div>
            <div className="contour" />
            <div className="movieReview">
              <div className="starScore">
                <p>평가하기</p>
                <div className="starsContainer">
                  <img
                    src="/images/emptystar.png"
                    alt="star"
                    className="star"
                  />
                  <img
                    src="/images/emptystar.png"
                    alt="star"
                    className="star"
                  />
                  <img
                    src="/images/emptystar.png"
                    alt="star"
                    className="star"
                  />
                  <img
                    src="/images/emptystar.png"
                    alt="star"
                    className="star"
                  />
                  <img
                    src="/images/emptystar.png"
                    alt="star"
                    className="star"
                  />
                </div>
              </div>
              <div className="reviewContour" />
              <div className="commentContainer">
                <div className="wantLook">
                  <img src="/images/plus.png" alt="plus" className="plus" />
                  <span>보고싶어요</span>
                </div>
                <div className="comment">
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
                </div>
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
      );
    });
    return <>{MovieHeader}</>;
  }
}

export default MovieHeader;
