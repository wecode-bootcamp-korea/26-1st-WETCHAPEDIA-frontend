import React, { Component } from 'react';
import CommentIndividual from '../CommentIndividual/CommentIndividual';
import Profile from '../Profile/Profile';
import './MovieInfos.scss';

class MovieInfos extends Component {
  render() {
    const { infos, isRegister, isComment, commentTexts, deleteCommentBox } =
      this.props;
    return (
      <div className="movieInfosContainer">
        <section className="movieInfos">
          <div className={isComment ? 'userCommentBox' : 'userCommentBoxOff'}>
            <img src="/images/userpicture.png" alt="user" className="picture" />
            <span className="comment">{commentTexts}</span>
            <span className="deleteButton" onClick={deleteCommentBox}>
              삭제
            </span>
          </div>
          <div
            className={
              isRegister && !isComment ? 'infoComment' : 'infoCommentOff'
            }
          >
            <span className="infoText">
              평점을 남겨주세요. 전창민 님의 생각을 글로 남겨보세요.
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
            {infos.movieBasicInfo && (
              <div className="infoMain">
                <p className="movieTitle">{infos.movieBasicInfo.title}</p>
                <p className="basicInfo">
                  {infos.movieBasicInfo.year}· {infos.movieBasicInfo.country}·
                  {infos.movieBasicInfo.genre}
                </p>
                <p className="detailInfo">
                  {infos.movieBasicInfo.runningTime} ·{infos.movieBasicInfo.age}
                </p>
                <p>{infos.movieBasicInfo.shortContent}</p>
              </div>
            )}
            <div className="infoContour" />
            <div className="actorProfiles">
              <p className="title">출연제작</p>
              <div className="profileContainer">
                {infos.actors &&
                  infos.actors.map(actor => {
                    return <Profile actorinfos={actor} key={actor.id} />;
                  })}
              </div>
            </div>
            <div className="infoContour" />
            <div className="movieCommentContainer">
              <div className="commentHeader">
                <span className="comment">코멘트</span>
                <span className="moreText">더보기</span>
              </div>
              <div className="commentContainer">
                {infos.contents &&
                  infos.contents.map(content => {
                    return (
                      <CommentIndividual
                        key={content.id}
                        commentInfo={content}
                      />
                    );
                  })}
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
  }
}

export default MovieInfos;
