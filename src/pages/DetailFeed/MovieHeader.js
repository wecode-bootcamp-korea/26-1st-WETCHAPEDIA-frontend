import React, { Component } from 'react';

class MovieHeader extends Component {
  render() {
    return (
      <header className="movieHeader">
        <div className="moviePosterContainer">
          <img
            src="/images/movieposter.jpeg"
            alt="movieposter"
            className="moviePoster"
          />
        </div>
        <div className="basicInfo">
          <div className="titleInfo">
            <p className="movieTitle">인터스텔라</p>
            <span className="movieYear">2017 </span>
            <span className="movieGenre">SF/스릴러 </span>
            <span className="movieCountry">미국</span>
          </div>
          <div className="contour" />
          <div className="averageScore">
            <span>
              평균
              <img
                src="/images/blackstar.png"
                alt="blackstar"
                className="blackstar"
              />
              4.0 (10,000명)
            </span>
          </div>
          <div className="contour" />
          <div className="movieReview">
            <div className="starScore">
              <p>평가하기</p>
              <div className="starsContainer">
                <img src="/images/emptystar.png" alt="star" className="star" />
                <img src="/images/emptystar.png" alt="star" className="star" />
                <img src="/images/emptystar.png" alt="star" className="star" />
                <img src="/images/emptystar.png" alt="star" className="star" />
                <img src="/images/emptystar.png" alt="star" className="star" />
              </div>
            </div>
            <div className="reviewContour" />
            <div className="commentContainer">
              <div className="wantLook">
                <img src="/images/plus.png" alt="plus" className="plus" />
                <span>보고싶어요</span>
              </div>
              <div className="comment">
                <img src="/images/pencil.png" alt="pencil" className="pencil" />
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
                <img src="/images/dotmenu.png" alt="menu" className="dotmenu" />
                <span>더보기</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default MovieHeader;
