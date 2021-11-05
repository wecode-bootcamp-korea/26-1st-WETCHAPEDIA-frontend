import React, { Component } from 'react';

class MovieHeader extends Component {
  render() {
    const { infos, starsUrl, scoreComment, changeStars } = this.props;
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
                  <p className="scoreComent">{scoreComment}</p>
                  <div className="starsContainer" onMouseMove={changeStars}>
                    {starsUrl.map((url, index) => {
                      return (
                        <img
                          src={url}
                          alt="star"
                          className="star"
                          key={index}
                        />
                      );
                    })}
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
          </>
        )}
      </div>
    );
  }
}

export default MovieHeader;
