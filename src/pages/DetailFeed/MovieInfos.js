import React, { Component } from 'react';
import Profiles from './Profiles';
import CommentIndividuals from './CommentIndividuals';

class MovieInfos extends Component {
  render() {
    const { infos } = this.props;
    return (
      <>
        {infos.map((info, index) => {
          return (
            <div className="movieInfosContainer" key={index}>
              <section className="movieInfos">
                <div className="infoComment">
                  <span className="infoText">
                    대단한 작품이군요! 전창민 님의 감동을 글로 남겨보세요
                  </span>
                  <button type="button" className="infoCommentButton">
                    코멘트 남기기
                  </button>
                </div>
                <div className="mainInfo">
                  <div className="infoHeader">
                    <span className="title">기본정보</span>
                    <span className="moreText">더보기</span>
                  </div>
                  <div className="infoMain">
                    <p className="movieTitle">{info.movieBasicInfo.title}</p>
                    <p className="basicInfo">
                      {info.movieBasicInfo.year}· {info.movieBasicInfo.country}·
                      {info.movieBasicInfo.genre}
                    </p>
                    <p className="detailInfo">
                      {info.movieBasicInfo.runningTime} ·
                      {info.movieBasicInfo.age}
                    </p>
                    <p>{info.movieBasicInfo.shortContent}</p>
                  </div>
                  <div className="infoContour" />
                  <div className="actorProfiles">
                    <p className="title">출연제작</p>
                    <div className="profileContainer">
                      <Profiles infos={infos} />
                    </div>
                  </div>
                  <div className="infoContour" />
                  <div className="movieCommentContainer">
                    <div className="commentHeader">
                      <span className="comment">코멘트</span>
                      <span className="moreText">더보기</span>
                    </div>
                    <div className="commentContainer">
                      <CommentIndividuals />
                    </div>
                  </div>
                </div>
              </section>
              <div className="sideInfo">
                <div className="sideBox1" />
                <div className="sideBox2" />
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default MovieInfos;
