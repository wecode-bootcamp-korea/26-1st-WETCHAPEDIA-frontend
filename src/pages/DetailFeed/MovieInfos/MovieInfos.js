import React, { Component } from 'react';
import CommentIndividual from '../CommentIndividual/CommentIndividual';
import Profile from '../Profile/Profile';
import SideElement from '../SideElement/SideElement';
import SlideCarousel from './SlideCarousel';
import './MovieInfos.scss';

class MovieInfos extends Component {
  render() {
    const {
      infos,
      isCommentRegister,
      commentTexts,
      deleteCommentBox,
      registerScore,
      changeCommentModalState,
    } = this.props;
    const releasedDate = infos.movie_basic_info.release_date.slice(0, 4);
    return (
      <div className="movieInfosContainer">
        <section className="movieInfos">
          <div
            className={
              isCommentRegister ? 'userCommentBox' : 'userCommentBoxOff'
            }
          >
            <img src="/images/userpicture.png" alt="user" className="picture" />
            <span className="comment">{commentTexts}</span>
            <span className="deleteButton" onClick={deleteCommentBox}>
              삭제
            </span>
          </div>
          <div
            className={
              registerScore && !isCommentRegister
                ? 'infoComment'
                : 'infoCommentOff'
            }
          >
            <span className="infoText">
              평점을 남겨주세요. 전창민 님의 생각을 글로 남겨보세요.
            </span>
            <button
              type="button"
              className="infoCommentButton"
              onClick={changeCommentModalState}
            >
              코멘트 남기기
            </button>
          </div>
          <div className="mainInfo">
            <div className="infoHeader">
              <span className="title">기본정보</span>
              <span className="moreText">더보기</span>
            </div>
            {infos.movie_basic_info && (
              <div className="infoMain">
                <p className="movieTitle">{infos.movie_basic_info.title}</p>
                <p className="basicInfo">
                  {releasedDate} · {infos.movie_basic_info.country} ·
                  {infos.movie_basic_info.genre}
                </p>
                <p className="detailInfo">
                  {`${parseInt(infos.movie_basic_info.running_time / 60)}시간 ${
                    infos.movie_basic_info.running_time % 60
                  }분`}{' '}
                  · {infos.movie_basic_info.grade}
                </p>
                <p>{`${infos.movie_basic_info.short_comment.slice(
                  0,
                  150
                )}....`}</p>
              </div>
            )}
            <div className="infoContour" />
            <div className="actorProfiles">
              <p className="title">출연제작</p>
              <div className="profileContainer">
                {infos.staffs &&
                  infos.staffs.map(actor => {
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
                {infos.comments &&
                  infos.comments.map(content => {
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
          <SlideCarousel />
        </section>
        <SideElement />
      </div>
    );
  }
}

export default MovieInfos;
